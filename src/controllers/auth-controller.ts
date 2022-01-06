import { BodyRequest } from 'utils/types';
import AuthAPI from '../api/auth-api';

const authApi = new AuthAPI();

export default class AuthController {

    static signin(data: BodyRequest) {
        authApi.signin(data).then((result: XMLHttpRequest) => {
            if (result.status === 200) {
                console.log('редирект на чат')
            }
            else {
                console.log(result.responseText)
            }
        });
    }

}