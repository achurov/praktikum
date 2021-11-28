import './chat.scss';
import tmpl from './chat.pug';
import sidebar from '../../modules/sidebar/sidebar'
import chat from '../../modules/chat/chat'

const data = {
    sidebar: sidebar({
        chatList: [
            {
                title: 'Карина Терехова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30',
                active: true
            },
            {
                title: 'Илья Баков',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Максим Красных',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Кристина Аметова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Денис Бульбашев',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
            {
                title: 'Елена Никонорова',
                text: 'Позвонил на основной номер потом что-то произошло',
                time: '10:30'
            },
        ],
    }),

    chat: chat({
        person: {
            name: 'Карина Терехова'
        },
        messages: [
            {
                date: '14 августа 2020',
                messages: [
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                ]
            },
            {
                date: '20 августа 2020',
                messages: [
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio. Debitis rerum esse magnam perspiciatis dignissimos temporibus facilis enim itaque modi vitae voluptatibus incidunt, eveniet qui doloribus, consequatur quam sit?' 
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.'
                    },
                ]
            },
            {
                date: '16 августа 2021',
                messages: [
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Алло'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Ты шо там делаешь??'
                    },
                    {
                        name: 'Карина Терехова',
                        time: '10:30',
                        text: 'Вылезай оттуда'
                    },
                ]
            }
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