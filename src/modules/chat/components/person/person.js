import './person.scss';
import tmpl from './person.pug';
import avatar from '../../../../components/avatar/avatar' 

export default (data) => {

    data.avatar = avatar(data.person)

    return tmpl(data);
}