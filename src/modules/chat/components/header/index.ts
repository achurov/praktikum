import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';
import Button from '../../../../components/button'
import Person from '../../../chat/components/person'

export default class Header extends Block {

    constructor(props: Props = {}) {

        const buttons = [];
        props.buttons.forEach(item => {
            buttons.push(new Button({ ...item, className: 'utils__item' }))
        });

        const person = new Person(props.person);

        super('div', { ...props, buttons, person });
    }

    render() {
        return this.compile(template, this.props);
    }
}