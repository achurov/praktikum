import { BodyRequest } from 'utils/types';
import AuthAPI from '../api/auth-api';
import Router from '../utils/router';

const authApi = new AuthAPI();
const router = new Router();

export default class AuthController {

    static signin(data: BodyRequest) {
        try {
            // валидация?            

            authApi.signin(data).then((result: XMLHttpRequest) => {
                if (result.status === 200) {
                    console.log('редирект на чат')
                    //temp
                    router.go('/messenger');
                }
                else {
                    console.log(result.responseText)
                }
            });

            // Останавливаем крутилку
        } catch (error) {
            //
        }
    }

}