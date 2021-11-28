import tmpl from './signup.pug';
import form from '../../modules/form/form'

const data = {
    form: form({
        action: '/chat',
        title: 'Регистрация',
        elements: [
            {
                elementType: 'input',
                name: 'first_name',
                placeholder: 'Имя'
            },
            {
                elementType: 'input',
                name: 'second_name',
                placeholder: 'Фамилия'
            },
            {
                elementType: 'input',
                name: 'login',
                placeholder: 'Логин'
            },
            {
                elementType: 'input',
                type: 'email',
                name: 'email',
                placeholder: 'Почта'
            },
            {
                elementType: 'input',
                name: 'phone',
                placeholder: 'Телефон'
            },
            {
                elementType: 'input',
                name: 'password',
                placeholder: 'Пароль'
            },
            {
                elementType: 'input',
                type: 'password',
                name: 're_password',
                placeholder: 'Пароль еще раз'
            },
            {
                elementType: 'button',
                text: 'Зарегистрироваться'
            },
            {
                elementType: 'text',
                text: 'Уже есть аккаунт?',
            },
            {
                elementType: 'link',
                href: '/signin',
                text: 'Войти'
            },

        ]
    })
}

export default () => {
    return tmpl(data);
}