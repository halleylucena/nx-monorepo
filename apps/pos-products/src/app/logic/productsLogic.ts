import { CapacitorHttp } from '@capacitor/core';

let baseUrl = 'http://vendus-pt/ws/v1.2/products/';
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://www.vendus.pt/ws/v1.2/products/';
}

export const getProdsList = async (apiKey: string) => {
    let res: any;

    const options: any = {
        url: `${baseUrl}`,
        params: {
            api_key: apiKey,
            envelope: '1',
        },
    };
    await CapacitorHttp.get(options)
        .then((response) => (res = response.data))
        .catch((error) => {
            return Promise.reject(new Error(error));
        });

    return res;
};

export const getProdDetail = async (apiKey: string, id: string) => {
    let res: any;

    const options: any = {
        url: `${baseUrl}${id}`,
        params: {
            api_key: apiKey,
        },
    };
    await CapacitorHttp.get(options)
        .then((response) => (res = response.data))
        .catch((error) => {
            return Promise.reject(new Error(error));
        });

    return res;
};
