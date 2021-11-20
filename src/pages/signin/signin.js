import tmpl from './signin.pug';
import form from '../../components/form/form'

const data = {
    form: form({
        action: '/',
        title: 'Вход',
        inputs: [
            {
                type: 'text',
                name: 'login',
                placeholder: 'Логин'
            },
            {
                type: 'password',
                name: 'password',
                placeholder: 'Пароль'
            }
        ],
        buttons: [
            {
                text: 'Войти'
            }
        ],
        bottomText: 'Нет аккаунта?',
        bottomLink: {
            href: 'signup',
            text: 'Регистрация'
        }
    })
}

export default () => {
    return tmpl(data);
}