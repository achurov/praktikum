import './message.scss';
import tmpl from './message.pug';
import avatar from '../../../../components/avatar/avatar'

export default (data) => {

    data.avatar = avatar({ size: 'm' })

    return tmpl(data);
}