import Block from '../../utils/block';
import { Props } from '../../utils/types';
import template from './template.pug';
import form from '../../modules/form';
import Input from '../../modules/form/components/input';
import Button from '../../modules/form/components/button';
import FormText from '../../modules/form/components/text';
import Link from '../../components/link';
import Event from './events'
export default class SingUpPage extends Block {

    constructor(props: Props = {}) {

        props = {
            title: 'LOGIN',
            form: new form({
                action: '/chat',
                title: 'Регистрация',
                elements: [
                    new Input({
                        name: 'first_name',
                        placeholder: 'Имя',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Input({
                        name: 'second_name',
                        placeholder: 'Фамилия',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Input({
                        name: 'login',
                        placeholder: 'Логин',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Input({
                        type: 'email',
                        name: 'email',
                        placeholder: 'Почта',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Input({
                        name: 'phone',
                        placeholder: 'Телефон',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Input({
                        type: 'password',
                        name: 'password',
                        placeholder: 'Пароль',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Input({
                        type: 'password',
                        name: 're_password',
                        placeholder: 'Пароль еще раз',
                        className: 'form__input',
                        events: {
                            blur: Event.inputBlur,
                            focus: Event.inputFocus
                        }
                    }),
                    new Button({
                        text: 'Зарегистрироваться',
                        className: 'form__btn'
                    }),
                    new FormText({
                        text: 'Уже есть аккаунт?',
                    }),
                    new Link({
                        href: '/signin',
                        text: 'Войти',
                        className: 'form__link'
                    })
                ],
                events: {
                    submit: Event.submit
                }
            })
        }

        super('div', props);

    }

    render() {
        return this.compile(template, this.props);
    }

}

