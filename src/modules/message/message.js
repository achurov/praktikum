import './message.scss';
import tmpl from './message.pug';

export default (data) => {
    return tmpl(data);
}