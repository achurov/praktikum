import './setting.scss';
import tmpl from './setting.pug';
// import avatar from '../avatar/avatar'
// import line from './components/line/line'
// import link from '../link/link'


export default (data) => {

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

    return tmpl(data);
}