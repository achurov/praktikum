import './button.scss';
import tmpl from './button.pug';
import svg from '../../../static/images/svg';

export default (data) => {

    if (data.icon) {
        switch (data.icon) {
            case 'search':
                data.icon = svg.search;
                break;

            case 'plus':
                data.icon = svg.plus;
                break

            case 'send':
                data.icon = svg.send;
                break

            case 'setting':
                data.icon = svg.setting;
                break

            case 'more':
                data.icon = svg.more;
                break

            default:
                data.icon = ''
                break;
        }
    }

    return tmpl(data);
}