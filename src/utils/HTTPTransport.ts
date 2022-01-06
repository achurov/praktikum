import { Options } from './types';

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
};

class HTTPTransport {

    public get = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };


    public post = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    };


    public put = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
    };


    public delete = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
    };


    private queryStringify(data: Record<string, any>) {
        if (typeof data !== 'object') {
            throw new Error('Тело запроса должно быть объектом');
        }

        const keys = Object.keys(data);

        return keys.reduce((result, key, index) => {
            return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
        }, '?');
    }


    private request = (url: string, options: Options, timeout = 5000) => {
        const { headers = {}, method, query, body } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const isGet = (method === METHODS.GET);

            xhr.open(
                method,
                isGet && query
                    ? `${url}${this.queryStringify(query)}`
                    : url,
            );

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.timeout = timeout;

            xhr.onload = () => resolve(xhr);
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (isGet || !body) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(body));
            }
        });
    };
}

export default HTTPTransport;