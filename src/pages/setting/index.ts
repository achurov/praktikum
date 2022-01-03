import Block from '../../utils/block';
import { Props } from '../../utils/types';
import template from './template.pug';
// import Sidebar from '../../modules/sidebar'
// import Chat from '../../modules/chat'
import PageHeader from '../../components/pageHeader';
import Button from '../../components/button';
import Setting from '../../components/setting';
import Card from '../../components/setting/components/card';
import Link from '../../components/link';


export default class SettingPage extends Block {

    constructor(props: Props = {}) {

        let pageHeader = new PageHeader({
            title: 'Настройки',
            left: new Button({
                icon: 'setting',
                active: true
            })
        });

        let setting = new Setting({
            avatar: { size: 'xl' },
            groups: [
                {
                    cards: [
                        new Card({
                            name: 'Имя',
                            value: 'Tomas'
                        }),
                        new Card({
                            name: 'Фамилия',
                            value: 'Tomas'
                        }),
                        new Card({
                            name: 'Имя в чате',
                            value: 'Tomas'
                        }),
                    ]
                },
                {
                    cards: [
                        new Card({
                            name: 'Логин',
                            value: 'Tomas'
                        }),
                        new Card({
                            name: 'Почта',
                            value: 'Tomas'
                        }),
                        new Card({
                            name: 'Телефон',
                            value: 'Tomas'
                        })
                    ]
                },
                {
                    cards: [
                        new Link({
                            href: '/',
                            className: '',
                            text: 'Изменить пароль'
                        }),
                        new Link({
                            href: '/',
                            className: 'link_abort',
                            text: 'Выйти'
                        }),
                    ]
                }
            ]
        })


        super('div', { ...props, pageHeader, setting });

    }

    render() {
        return this.compile(template, this.props);
    }

}

