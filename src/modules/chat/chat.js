import './chat.scss';
import tmpl from './chat.pug';
import person from './components/person/person'
import message from './components/message/message'
import button from '../../components/button/button'
import input from '../../modules/form/components/input/input'

export default (data) => {

    data.person = person(data.person)

    if (Array.isArray(data.messages)) {
        data.messages = data.messages.map(dateGroup => {
            dateGroup.messages = dateGroup.messages.map(item => message(item))
            return dateGroup
        })
    }

    data.headerButtons = [
        button({ title: 'search in chat', className: 'utils__item', icon: 'search' }),
        button({ title: 'more', className: 'utils__item', icon: 'more' }),
    ]

    data.buttonAdd = button({ mode: 'light', title: 'Add an attachment', icon: 'plus' })
    data.newMessage = input({ placeholder: 'Сообщение' })
    data.buttonSend = button({ title: 'send message', icon: 'send' })

    return tmpl(data);
}