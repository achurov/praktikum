import Block from '../../utils/block';
import { Props } from '../../utils/types'
import template from './template.pug';
import './style.scss';
import svg from '../../../static/images/svg';
import Event from './events'

export default class Button extends Block {

    constructor(props: Props = {}) {

        if (props.icon) {
            switch (props.icon) {
                case 'search':
                    props.icon = svg.search;
                    break;

                case 'plus':
                    props.icon = svg.plus;
                    break

                case 'send':
                    props.icon = svg.send;
                    break

                case 'setting':
                    props.icon = svg.setting;
                    break

                case 'more':
                    props.icon = svg.more;
                    break

                default:
                    props.icon = ''
                    break;
            }


        }

        props.events = {
            click: Event.click
        }

        super('button', props);
    }

    render() {

        return this.compile(template, this.props);

    }
}
