"use strict";
// import { Options } from '../types';
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
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
;
var HTTPTransport = /** @class */ (function () {
    function HTTPTransport() {
        var _this = this;
        this.get = function (url, options) {
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.GET }), options.timeout);
        };
        this.post = function (url, options) {
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.POST }), options.timeout);
        };
        this.put = function (url, options) {
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.PUT }), options.timeout);
        };
        this["delete"] = function (url, options) {
            return _this.request(url, __assign(__assign({}, options), { method: METHODS.DELETE }), options.timeout);
        };
        this.request = function (url, options, timeout) {
            if (timeout === void 0) { timeout = 5000; }
            var _a = options.headers, headers = _a === void 0 ? {} : _a, method = options.method, data = options.data;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                var isGet = (method === METHODS.GET);
                xhr.open(method, isGet && data
                    ? "" + url + _this.queryStringify(data)
                    : url);
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
                xhr.timeout = timeout;
                xhr.onload = function () { return resolve(xhr); };
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (isGet || !data) {
                    xhr.send();
                }
                else {
                    xhr.send(JSON.stringify(data));
                }
            });
        };
    }
    HTTPTransport.prototype.queryStringify = function (data) {
        if (typeof data !== 'object') {
            throw new Error('Тело запроса должно быть объектом');
        }
        var keys = Object.keys(data);
        return keys.reduce(function (result, key, index) {
            return "" + result + key + "=" + data[key] + (index < keys.length - 1 ? '&' : '');
        }, '?');
    };
    return HTTPTransport;
}());
exports["default"] = HTTPTransport;
