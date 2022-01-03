import Block from '../../utils/block';
import { Props } from '../../utils/types';
import template from './template.pug';
import Sidebar from '../../modules/sidebar'
import Chat from '../../modules/chat'

export default class ChatPage extends Block {

    constructor(props: Props = {}) {

        props = {
            sidebar: new Sidebar({
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
            chat: new Chat({
                person: {
                    name: 'Карина Терехова'
                },
                dateGroups: [
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

        super('div', props);

    }

    render() {
        return this.compile(template, this.props);
    }

}

