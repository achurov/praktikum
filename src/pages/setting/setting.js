import './setting.scss';
import tmpl from './setting.pug';
import pageHeader from '../../components/pageHeader/pageHeader'
import setting from '../../components/setting/setting'
import avatar from '../../components/avatar/avatar'
import card from '../../components/setting/components/card/card'
import link from '../../components/link/link'
import button from '../../components/button/button'

const data = {
    pageHeader: pageHeader({
        title: 'Настройки',
        left: button({
            icon: 'setting',
            active: true
        }),
        right: button({
            icon: 'setting',
            active: true
        }),
    }),
    setting: setting({
        avatar: avatar({
            size: 'xl'
        }),
        groups: [
            [
                card({
                    name: 'Имя',
                    value: 'Tomas'
                }),
                card({
                    name: 'Фамилия',
                    value: 'Tomas'
                }),
                card({
                    name: 'Имя в чате',
                    value: 'Tomas'
                }),

            ],
            [
                card({
                    name: 'Логин',
                    value: 'Tomas'
                }),
                card({
                    name: 'Почта',
                    value: 'Tomas'
                }),
                card({
                    name: 'Телефон',
                    value: 'Tomas'
                })
            ],
            [
                link({
                    href: '/',
                    className: '',
                    text: 'Изменить пароль'
                }),
                link({
                    href: '/',
                    className: 'link_abort',
                    text: 'Выйти'
                }),
            ]
        ]
    })
}

export default () => {
    // if (Array.isArray(data.chatList)) {
    //     data.chatList = data.chatList.map(item => card(item))
    // }

    // data.sidebar = sidebar(data.sidebar)
    // console.log(data.cards )
    // if (data.chat) {
    //     if (Array.isArray(data.chat.messages)) {
    //         data.chat.messages = data.chat.messages.map(dateGroup => {
    //             dateGroup.messages = dateGroup.messages.map(message => messageCard(message))
    //             return dateGroup
    //         })
    //     }
    // }

    return tmpl(data);
}