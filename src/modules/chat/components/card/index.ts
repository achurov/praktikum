import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';
import Avatar from '../../../../components/avatar'

export default class Card extends Block {

    constructor(props: Props = {}) {

        let avatar = new Avatar({ size: 'm' })

        super('div', { ...props, avatar });
    }

    render() {
        return this.compile(template, this.props);
    }

}