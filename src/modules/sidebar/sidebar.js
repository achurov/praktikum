import './sidebar.scss';
import tmpl from './sidebar.pug';
import card from '../chat/components/card/card'

export default (data) => {

    // console.log(data)
    if (Array.isArray(data.chatList)) {
        data.chatList = data.chatList.map(item => card(item))
    }
    // console.log(data)
   
    return tmpl(data);
}