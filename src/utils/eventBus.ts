export default class EventBus {

    private listeners: Record<string, Function[]>

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    emit(event: string, ...args: string[]): void {
        this.listeners[event].forEach(listener => listener(...args));
    }
}