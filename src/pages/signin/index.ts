import Block from '../../utils/block';
import { Props } from '../../utils/types';
import template from './template.pug';
import form from '../../modules/form';
import Input from '../../modules/form/components/input';
import Button from '../../modules/form/components/button';
import FormText from '../../modules/form/components/text';
import Link from '../../components/link';

export default class SingInPage extends Block {

    constructor(props: Props = {}) {

        props = {
            title: 'LOGIN',
            form: new form({
                action: '/chat',
                title: 'Вход',
                elements: [
                    new Input({
                        name: 'login',
                        placeholder: 'Логин',
                        className: 'form__input',
                    
                    }),
                    new Input({
                        name: 'password',
                        placeholder: 'Логин',
                        className: 'form__input'
                    }),
                    new Button({
                        text: 'Войти',
                        className: 'form__btn'
                    }),
                    new FormText({
                        text: 'Нет аккаунта?',
                    }),
                    new Link({
                        elementType: 'link',
                        href: '/signup',
                        text: 'Регистрация',
                        className: 'form__link'
                    })
                ]
            })
        }



        super('div', props);

    }

    // events() {
    //     return {
    //         loginChange: (e) => {
    //             console.log(e)
    //         }
    //     }
    // }

    render() {
        return this.compile(template, this.props);
    }

}