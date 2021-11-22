

import input from './components/input/input'
import button from './components/button/button'
import link from '../../components/link/link'
import text from './components/text/text'

import './form.scss';
import tmpl from './form.pug';

export default (data) => {

    if (Array.isArray(data.elements)) {
        data.elements = data.elements.map((item) => {
            switch (item.elementType) {
                case 'input':
                    item.className = 'form__input'
                    return input(item)

                case 'button':
                    return button(item)

                case 'link':
                    item.className = 'form__link'
                    return link(item)

                case 'text':
                    return text(item)

                default:
                    return item;
            }
        })
    }

    // for (item of data.elements) {
    //     item = 12
    //     switch (item.elementType) {
    //         case 'input':
    //             item.className = 'form__input'
    //             item = input(item)
    //             item = 12
    //             break;

    //         case 'button':
    //             item.className = 'form__btn'
    //             item = button(item)

    //             break;

    //         // case 'link':
    //         //     item = button(item)
    //         //     item.className = 'form__bottom'
    //         //     item = link(data.bottomLink)

    //         //     break;

    //         default:
    //             break;
    //     }
    // }

    // if (Array.isArray(data.inputs)) {
    //     data.inputs = data.inputs.map((item) => {
    //         item.className = 'form__input'
    //         return input(item)
    //     })
    // }
    console.log(data)
    // if (Array.isArray(data.buttons)) {
    //     data.buttons = data.buttons.map((item) => {
    //         item.className = 'form__btn'
    //         return button(item)
    //     })
    // }

    // if(data.bottomLink){
    //     data.bottomLink.className = 'form__bottom'
    //     data.bottomLink = link(data.bottomLink)
    // }

    return tmpl(data);
}