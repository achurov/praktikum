import './sidebar.scss';
import tmpl from './sidebar.pug';
import card from '../chat/components/card/card'
import input from '../form/components/input/input'
import button from '../../components/button/button'
import { Concat } from 'nunjucks/src/nodes';
import { string } from 'nunjucks/src/filters';

export default (data) => {

    if (Array.isArray(data.chatList)) {
        data.chatList = data.chatList.map(item => card(item))
    }

    data.button = button({ title: 'search', icon: 'setting' })
    data.search = input({ className: 'sidebar__search', placeholder: 'Поиск' })

    return tmpl(data);
}