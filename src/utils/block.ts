import EventBus from './eventBus';
import { Props } from './types';
import { ElementEvents } from './types';
import uuidv4 from './uuid';
import renderDOM from './renderDOM';
export default abstract class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CWU: "flow:component-will-unmount",
        FLOW_RENDER: "flow:render"
    };

    protected id: string;
    protected tagName: string;
    protected element: HTMLElement;
    protected eventBus: EventBus;
    protected events: ElementEvents;
    protected props: Props;
    protected children: Record<string, Block>;

    constructor(tagName: string = 'div', propsAndChildren: Props) {
        this.eventBus = new EventBus();
        this.registerEvents();

        this.id = uuidv4();
        this.tagName = tagName;

        const { children, props, events } = this.getChildren(propsAndChildren);
        this.props = this.makePropsProxy(props);
        this.children = children;
        this.events = events;

        this.eventBus.emit(Block.EVENTS.INIT);
    }

    private registerEvents(): void {
        this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CWU, this.componentWillUnmount.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_RENDER, this.componentRender.bind(this));
    }

    private getChildren(propsAndChildren) {
        const children = {};
        const props = {};
        const events = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (key === 'events') {
                Object.entries(value as Object).forEach(([eventKey, eventValue]) => {
                    events[eventKey] = eventValue;
                })
            } else if (value instanceof Block || Array.isArray(value)) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props, events };

    }

    private makePropsProxy(props: Props) {
        return new Proxy(props, {
            get: (target: Props, prop: string): unknown => {
                return target[prop];
            },

            set: (target: Props, prop: string, value: unknown): boolean => {
                const oldProp = target[prop];
                target[prop] = value;

                this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProp, target[prop]);
                return true;
            },

        })
    }

    private init(): void {
        this.createElement();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    private componentDidMount(): void {
    }

    private componentDidUpdate(oldProp, prop): void {
        if (oldProp === prop) {
            return;
        }

        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    private componentWillUnmount(): void {
    }

    private componentRender(): void {
        const fragment = this.render();
        this.element = fragment.firstElementChild as HTMLElement;
        this.addEvents();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    protected abstract render(): DocumentFragment;


    protected compile(template, props) {
        const propsAndStubs: Props = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                if (!propsAndStubs[key]) {
                    propsAndStubs[key] = [];
                }

                child.forEach((innerChild: Block) => {
                    propsAndStubs[key].push(`<div data-id="${innerChild.id}"></div>`)
                })
            } else {
                propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
            }
        });

        const fragment = document.createElement('template') as HTMLTemplateElement;
        fragment.innerHTML = template(propsAndStubs);

        Object.values(this.children).forEach(child => {
            if (Array.isArray(child)) {
                child.forEach((innerChild: Block) => {
                    const stub = fragment.content.querySelector(`[data-id="${innerChild.id}"]`) as HTMLElement;
                    stub.replaceWith(innerChild.getElement());
                })
            } else {
                const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
                (stub as HTMLElement).replaceWith(child.getElement());
            }
        });

        return fragment.content;
    }

    private createElement() {
        this.element = document.createElement(this.tagName);
    }

    private addEvents() {
        Object.keys(this.events).forEach((eventName) => {
            this.element.addEventListener(eventName, this.events[eventName].bind(this)); 
        })
    }

    public getElement(): HTMLElement {
        return this.element;
    }

    public show(rootQuery){
        renderDOM(rootQuery, this);
    }
    
    public hide(){
        this.getElement().remove();
    }
}