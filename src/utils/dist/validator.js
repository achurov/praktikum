"use strict";
exports.__esModule = true;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.validate = function (value, rules) {
        var _this = this;
        this.result = [];
        rules.split('|').forEach(function (rule) {
            rule = rule.toLocaleLowerCase();
            _this.required(rule, value);
            _this.email(rule, value);
            _this.min(rule, value);
        });
        return this.result;
    };
    Validator.required = function (rule, value) {
        if (rule !== 'required')
            return;
        if (!value) {
            this.result.push({
                result: false,
                message: 'field is required'
            });
        }
    };
    Validator.email = function (rule, value) {
        if (rule !== 'email')
            return;
        if (!value.match(/.+\@.+\..+/)) {
            this.result.push({
                result: false,
                message: 'is not email'
            });
        }
    };
    Validator.min = function (rule, value) {
        if (rule.slice(0, 3) !== 'min')
            return;
        if (typeof value !== 'string')
            return;
        var minCount = Number(rule.split(':')[1]);
        if (value.length < minCount) {
            this.result.push({
                result: false,
                message: "min length is " + minCount
            });
        }
    };
    return Validator;
}());
exports["default"] = Validator;
