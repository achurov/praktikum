

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

   
    return tmpl(data);
}