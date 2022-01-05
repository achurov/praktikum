import Block from '../../utils/block';
import { Props } from '../../utils/types'
import template from './template.pug';
import './style.scss';
import Event from './events'

export default class Link extends Block {

    constructor(props: Props = {}) {

        props.events = {
            click: Event.click
        }

        super('div', props);

    }

    render() {

        return this.compile(template, this.props);

    }
}