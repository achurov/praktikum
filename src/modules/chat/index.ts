import Block from '../../utils/block';
import { Props } from '../../utils/types'
import template from './template.pug';
import './style.scss';
import Header from './components/header'
import Button from '../../components/button';
import Input from '../form/components/input';
import DateGroup from '../chat/components/dateGroup';

export default class Chat extends Block {

    constructor(props: Props = {}) {

        let header = new Header({
            person: props.person,
            buttons: [
                { title: 'search in chat', icon: 'search' },
                { title: 'more', icon: 'more' },
            ]
        });

        let dateGroups: Array<Block> = [];

        if (Array.isArray(props.dateGroups)) {
            props.dateGroups.forEach(item => {
                dateGroups.push(new DateGroup(item)) 
            });
        }

        let buttonAdd = new Button({ mode: 'light', title: 'Add an attachment', icon: 'plus' })
        let newMessage = new Input({ placeholder: 'Сообщение' })
        let buttonSend = new Button({ title: 'send message', icon: 'send' })


        super('div', { ...props, dateGroups, header, buttonAdd, newMessage, buttonSend });
    }

    render() {
        return this.compile(template, this.props);
    }
}