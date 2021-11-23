import './card.scss';
import tmpl from './card.pug';
import avatar from '../../../../components/avatar/avatar'

export default (data) => {
    
    data.avatar = avatar({size:'m'})

    return tmpl(data);
}