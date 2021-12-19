"use strict";
exports.__esModule = true;
var validator_1 = require("../../utils/validator");
var input_1 = require("../../modules/form/components/input");
exports["default"] = {
    inputFocus: function (event) {
        var element = event.target;
        removeError.call(this, element);
    },
    inputBlur: function (event) {
        var element = event.target;
        validateElement.call(this, element);
    },
    submit: function (event) {
        event.preventDefault();
        var error = false;
        this.children.elements.forEach(function (child) {
            if (child instanceof input_1["default"]) {
                var element = child.getElement();
                var validateResult = validateElement.call(child, element);
                error = validateResult.length || error;
            }
        });
        if (error) {
            console.log('submit not OK');
        }
        else {
            console.log('submit OK');
        }
    }
};
var rules = {
    'first_name': 'required|min:3',
    'second_name': 'required|min:3',
    'login': 'required|min:3',
    'email': 'required|email',
    'phone': 'required|phone',
    'password': 'required|min:6',
    're_password': 'required|min:6'
};
function validateElement(element) {
    removeError.call(this, element);
    var rule = rules[element.name];
    if (!rule) {
        return [];
    }
    var validateResult = validator_1["default"].validate(element.value, rule);
    var messages = [];
    validateResult.forEach(function (validateMassage) {
        if (!validateMassage.result) {
            element.classList.add('error');
            messages.push(validateMassage.message);
        }
    });
    if (messages) {
        var messagesElement = document.createElement('div');
        messagesElement.classList.add('error-massege');
        messagesElement.setAttribute('data-input-id', this.id);
        messagesElement.textContent = messages.join(', ');
        element.after(messagesElement);
    }
    return validateResult;
}
function removeError(element) {
    element.classList.remove('error');
    if (this.id) {
        document.querySelectorAll("[data-input-id=\"" + this.id + "\"]").forEach(function (errorElement) {
            errorElement.remove();
        });
    }
}
