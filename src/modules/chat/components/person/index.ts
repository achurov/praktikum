import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';
import Avatar from '../../../../components/avatar'

export default class Person extends Block {

    constructor(props: Props = {}) {

        const avatar = new Avatar(props.person)


        super('div', { ...props, avatar });
    }

    render() {
        return this.compile(template, this.props);
    }
}