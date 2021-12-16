import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';
import Message from '../message'

export default class DateGroup extends Block {

    constructor(props: Props = {}) {

        let messages: Array<Block> = [];

        if (Array.isArray(props.messages)) {
            props.messages.forEach(item => {
                messages.push(new Message(item))
            })
        }

        super('div', { ...props, messages });
    }

    render() {
        return this.compile(template, this.props);
    }
}