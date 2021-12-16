import Block from '../../utils/block';
import { Props } from '../../utils/types'
import template from './template.pug';
import './style.scss';
import Button from '../../components/button';
import Input from '../form/components/input';
import Card from '../chat/components/card';

export default class Sidebar extends Block {

    constructor(props: Props = {}) {

        const chatList: Array<Block> = [];

        if (Array.isArray(props.chatList)) {
            props.chatList.forEach(element => {
                chatList.push(new Card(element))
            });
        }

        props.button = new Button({ title: 'setting', icon: 'setting', href: '/setting' })
        props.search = new Input({ className: 'sidebar__search', placeholder: 'Поиск' })

        super('div', { ...props, chatList });
    }

    render() {
        return this.compile(template, this.props);
    }
}