import tmpl from './signin.pug';
import form from '../../modules/form/form'

const data = {
    form: form({
        action: '/chat',
        title: 'Вход',
        elements: [
            {
                elementType: 'input',
                name: 'login',
                placeholder: 'Логин'
            },
            {
                elementType: 'input',
                type: 'password',
                name: 'password',
                placeholder: 'Пароль'
            },
            {
                elementType: 'button',
                text: 'Войти'
            },
            {
                elementType: 'text',
                text: 'Нет аккаунта?',
            },
            {
                elementType: 'link',
                href: '/signup',
                text: 'Регистрация'
            },
            
        ]
    })
}

export default () => {
    return tmpl(data);
}