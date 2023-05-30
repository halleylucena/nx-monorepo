import { CapacitorHttp } from '@capacitor/core';

console.log('log from login: ', process.env.NODE_ENV);

let baseUrl = 'http://vendus-pt/ws/v1.2';
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://www.vendus.pt/ws/v1.2';
}

export function useLogin(api: any) {
    const requestLogin = async (email: string) => {
        let res: any;

        console.log('using capacitor http !!!');
        const options = {
            url: baseUrl,
            headers: {},
            params: {
                _email: email,
            },
        };

        await CapacitorHttp.get(options)
            .then((response) => (res = response))
            .catch((error) => (res = error.response));

        return res;
    };

    const login = async (email: string, pwd: string, saas: string) => {
        console.log('data?...', email, pwd, saas);
        let res: any;

        console.log('using capacitor http ???');
        const options: any = {
            url: `${baseUrl}/account/`,
            params: {
                _email: email,
                _password: pwd,
                _saas: saas,
                _origin: 'pos',
            },
        };
        await CapacitorHttp.get(options)
            .then((response) => (res = response))
            .catch((error) => (res = error.response));

        console.log('res from login: ', res);
        return res;
    };

    const verifyPermission = async (apikey: string) => {
        let res: any;

        console.log('using capacitor http');
        const options: any = {
            url: `${baseUrl}/account/`,
            params: {
                api_key: apikey,
            },
        };
        await CapacitorHttp.get(options)
            .then((response) => (res = response))
            .catch((error) => (res = error.response));

        console.log('res from verify: ', res);
        return res;
    };

    return {
        requestLogin: requestLogin,
        login: login,
        verifyPermission: verifyPermission,
    };
}
