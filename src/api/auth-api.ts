import { BodyRequest } from 'utils/types';
import BaseAPI from './base-api';

export default class AuthAPI extends BaseAPI {

    public signin(data: BodyRequest) {

        return this.HTTP.post(this.baseUrl + '/auth/signin', {
            method: 'POST',
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            body: data
        });
    }

}
