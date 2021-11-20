import './form.css';
import tmpl from './form.pug';
import input from '../../components/input/input'
import button from '../../components/button/button'
import link from '../../components/link/link'

export default (data) => {

    if (Array.isArray(data.inputs)) {
        data.inputs = data.inputs.map((item) => {
            item.className = 'form__input'
            return input(item)
        })
    }

    if (Array.isArray(data.buttons)) {
        data.buttons = data.buttons.map((item) => {
            item.className = 'form__btn'
            return button(item)
        })
    }

    if(data.bottomLink){
        data.bottomLink.className = 'form__bottom'
        data.bottomLink = link(data.bottomLink)
    }

    return tmpl(data);
}