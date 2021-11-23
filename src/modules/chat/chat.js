import './chat.scss';
import tmpl from './chat.pug';
import person from './components/person/person'
import message from './components/message/message'

export default (data) => {

    data.person = person(data.person)

    if (Array.isArray(data.messages)) {
        data.messages = data.messages.map(dateGroup => {
            dateGroup.messages = dateGroup.messages.map(item => message(item))
            return dateGroup
        })
    }

console.log(data.messages)

    return tmpl(data);
}