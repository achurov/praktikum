"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var eventBus_1 = require("./eventBus");
var uuid_1 = require("uuid");
var Block = /** @class */ (function () {
    function Block(tagName, propsAndChildren) {
        if (tagName === void 0) { tagName = 'div'; }
        this.eventBus = new eventBus_1["default"]();
        this.registerEvents();
        this.id = uuid_1.v4();
        this.tagName = tagName;
        var _a = this.getChildren(propsAndChildren), children = _a.children, props = _a.props, events = _a.events;
        this.props = this.makePropsProxy(props);
        this.children = children;
        this.events = events;
        this.eventBus.emit(Block.EVENTS.INIT);
    }
    Block.prototype.registerEvents = function () {
        this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CWU, this.componentWillUnmount.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_RENDER, this.componentRender.bind(this));
    };
    Block.prototype.getChildren = function (propsAndChildren) {
        var children = {};
        var props = {};
        var events = {};
        Object.entries(propsAndChildren).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (key === 'events') {
                Object.entries(value).forEach(function (_a) {
                    var eventKey = _a[0], eventValue = _a[1];
                    events[eventKey] = eventValue;
                });
            }
            else if (value instanceof Block || Array.isArray(value)) {
                children[key] = value;
            }
            else {
                props[key] = value;
            }
        });
        return { children: children, props: props, events: events };
    };
    Block.prototype.makePropsProxy = function (props) {
        var _this = this;
        return new Proxy(props, {
            get: function (target, prop) {
                return target[prop];
            },
            set: function (target, prop, value) {
                var oldProp = target[prop];
                target[prop] = value;
                _this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProp, target[prop]);
                return true;
            }
        });
    };
    Block.prototype.init = function () {
        this.createElement();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    };
    Block.prototype.componentDidMount = function () {
        // console.log(this, 'componentDidMount')
    };
    Block.prototype.componentDidUpdate = function (oldProp, prop) {
        if (oldProp === prop) {
            return;
        }
        // console.log(this, 'componentDidUpdate')
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    };
    Block.prototype.componentWillUnmount = function () {
        // console.log(this, 'componentWillUnmount')
    };
    Block.prototype.componentRender = function () {
        var fragment = this.render();
        this.element = fragment.firstElementChild;
        this.addEvents();
        // this.element.innerHTML = this.render();
        // console.log(this.element.innerHTML);
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    };
    Block.prototype.compile = function (template, props) {
        var propsAndStubs = __assign({}, props);
        Object.entries(this.children).forEach(function (_a) {
            var key = _a[0], child = _a[1];
            if (Array.isArray(child)) {
                if (!propsAndStubs[key]) {
                    propsAndStubs[key] = [];
                }
                child.forEach(function (innerChild) {
                    propsAndStubs[key].push("<div data-id=\"" + innerChild.id + "\"></div>");
                });
            }
            else {
                propsAndStubs[key] = "<div data-id=\"" + child.id + "\"></div>";
            }
        });
        var fragment = document.createElement('template');
        fragment.innerHTML = template(propsAndStubs);
        Object.values(this.children).forEach(function (child) {
            if (Array.isArray(child)) {
                child.forEach(function (innerChild) {
                    var stub = fragment.content.querySelector("[data-id=\"" + innerChild.id + "\"]");
                    stub.replaceWith(innerChild.getElement());
                });
            }
            else {
                var stub = fragment.content.querySelector("[data-id=\"" + child.id + "\"]");
                stub.replaceWith(child.getElement());
            }
        });
        return fragment.content;
    };
    Block.prototype.createElement = function () {
        this.element = document.createElement(this.tagName);
    };
    Block.prototype.addEvents = function () {
        var _this = this;
        Object.keys(this.events).forEach(function (eventName) {
            _this.element.addEventListener(eventName, _this.events[eventName].bind(_this));
        });
    };
    Block.prototype.getElement = function () {
        return this.element;
    };
    Block.EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CWU: "flow:component-will-unmount",
        FLOW_RENDER: "flow:render"
    };
    return Block;
}());
exports["default"] = Block;
