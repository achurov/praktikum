import HTTPTransport from '../utils/HTTPTransport';

export default class BaseAPI {
   
    protected HTTP: HTTPTransport;
    protected baseUrl: string;

    public constructor(){
        this.HTTP = new HTTPTransport();
        this.baseUrl = 'https://ya-praktikum.tech/api/v2';
    }

}
