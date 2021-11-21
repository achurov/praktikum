import './setting.scss';
import tmpl from './setting.pug';

const data = {
    user:{
        firstName:'wer',
        secondName:'wer',
        login:'23rtg',
        email:'trfh',
        phone:'t3tg', 
    }
}

export default () => {
    return tmpl(data);
}