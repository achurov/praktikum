import './error500.scss';
import tmpl from './error500.pug';

const data = {}

export default () => {

    return tmpl(data);
}