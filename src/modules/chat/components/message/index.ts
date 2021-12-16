import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';
import Avatar from '../../../../components/avatar'

export default class Message extends Block {

    constructor(props: Props = {}) {

        const avatar = new Avatar({ size: 'm' })

        super('div', { ...props, avatar });
    }

    render() {
        return this.compile(template, this.props);
    }
}