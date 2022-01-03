// export default (data) => {

// if (Array.isArray(data.messages)) {
//     data.messages = data.messages.map(dateGroup => {
//         dateGroup.messages = dateGroup.messages.map(item => message(item))
//         return dateGroup
//     })
// }

// data.headerButtons = [
//     button({ title: 'search in chat', className: 'utils__item', icon: 'search' }),
//     button({ title: 'more', className: 'utils__item', icon: 'more' }),
// ]

// data.buttonAdd = button({ mode: 'light', title: 'Add an attachment', icon: 'plus' })
// data.newMessage = input({ placeholder: 'Сообщение' })
// data.buttonSend = button({ title: 'send message', icon: 'send' })

//     return tmpl(data);
// }

import Block from '../../utils/block';
import { Props } from '../../utils/types'
import template from './template.pug';
import './style.scss';
import Avatar from '../avatar'
import Group from './components/group'

export default class Setting extends Block {

    constructor(props: Props = {}) {

        let avatar = new Avatar({ size: 'xl' })
        let groups: Array<Block> = [];

        if (Array.isArray(props.groups)) {
            props.groups.forEach((item) => {
                groups.push(new Group(item))
            })
        }


        super('div', { ...props, avatar, groups });

    }

    render() {

        return this.compile(template, this.props);

    }
}