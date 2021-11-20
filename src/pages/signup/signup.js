import tmpl from './signup.pug';
import form from '../../components/form/form'

const data = {
    form: form({
        action: '/',
        title: 'Регистрация',
        inputs: [
            {
                type: 'text',
                name: 'first_name',
                placeholder: 'Имя'
            },
            {
                type: 'text',
                name: 'second_name',
                placeholder: 'Фамилия'
            },
            {
                type: 'text',
                name: 'login',
                placeholder: 'Логин'
            },
            {
                type: 'email',
                name: 'email',
                placeholder: 'Почта'
            },
            {
                type: 'text',
                name: 'phone',
                placeholder: 'Телефон'
            },
            {
                type: 'password',
                name: 'password',
                placeholder: 'Пароль'
            },
            {
                type: 'password',
                name: 're_password',
                placeholder: 'Пароль еще раз'
            },
        ],
        buttons: [
            {
                text: 'Зарегистрироваться'
            }
        ],
        bottomText: 'Уже есть аккаунт?',
        bottomLink: {
            href: '/signin',
            text: 'Войти'
        }
    })
}

export default () => {
    return tmpl(data);
}