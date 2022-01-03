"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var block_1 = require("../../utils/block");
var template_pug_1 = require("./template.pug");
var form_1 = require("../../modules/form");
var input_1 = require("../../modules/form/components/input");
var button_1 = require("../../modules/form/components/button");
var text_1 = require("../../modules/form/components/text");
var link_1 = require("../../components/link");
var events_1 = require("./events");
var SingUpPage = /** @class */ (function (_super) {
    __extends(SingUpPage, _super);
    function SingUpPage(props) {
        if (props === void 0) { props = {}; }
        var _this = this;
        props = {
            title: 'LOGIN',
            form: new form_1["default"]({
                action: '/chat',
                title: 'Регистрация',
                elements: [
                    new input_1["default"]({
                        name: 'first_name',
                        placeholder: 'Имя',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new input_1["default"]({
                        name: 'second_name',
                        placeholder: 'Фамилия',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new input_1["default"]({
                        name: 'login',
                        placeholder: 'Логин',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new input_1["default"]({
                        type: 'email',
                        name: 'email',
                        placeholder: 'Почта',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new input_1["default"]({
                        name: 'phone',
                        placeholder: 'Телефон',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new input_1["default"]({
                        type: 'password',
                        name: 'password',
                        placeholder: 'Пароль',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new input_1["default"]({
                        type: 'password',
                        name: 're_password',
                        placeholder: 'Пароль еще раз',
                        className: 'form__input',
                        events: {
                            blur: events_1["default"].inputBlur,
                            focus: events_1["default"].inputFocus
                        }
                    }),
                    new button_1["default"]({
                        text: 'Зарегистрироваться',
                        className: 'form__btn'
                    }),
                    new text_1["default"]({
                        text: 'Уже есть аккаунт?'
                    }),
                    new link_1["default"]({
                        href: '/signin',
                        text: 'Войти',
                        className: 'form__link'
                    })
                ],
                events: {
                    submit: events_1["default"].submit
                }
            })
        };
        _this = _super.call(this, 'div', props) || this;
        return _this;
    }
    SingUpPage.prototype.render = function () {
        return this.compile(template_pug_1["default"], this.props);
    };
    return SingUpPage;
}(block_1["default"]));
exports["default"] = SingUpPage;
