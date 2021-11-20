import tmpl from './index.pug';
import button from '../../components/button/button'

const data = {
    title: 'World',
    buttons: [
        button({
            text: 'кнопка 11',
            className: 'form__btn'
        }),
        button({
            text: 'кнопка 11'
        })
    ]
}

export default () => {
    return tmpl(data);
}