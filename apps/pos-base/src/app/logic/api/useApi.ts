import { isPlatform } from '@ionic/react';
import useStore from '../../store/store';
import { arrayToString } from '../utils';
import { CapacitorHttp } from '@capacitor/core';

export function useApi() {
    const store: any = useStore();

    const url = 'https://www.vendus.pt/';
    const urlDev = 'http://vendus-pt/';
    const urlApi = 'ws/v1.1/';

    const hostOnline = 'pos.vendus.pt';
    const hostStaging = 'pos-staging.vendus.pt';

    const getUrl = (endpoint: string) => {
        let _url = url;

        if (window.location.host !== hostOnline && isPlatform('desktop')) {
            _url = urlDev;
        }

        if (window.location.host === hostStaging) {
            console.log('staging');
            _url = url;
        }

        return _url + urlApi + endpoint;
    };

    const connect = async (
        endpoint: string,
        params?: any,
        method?: any
    ): Promise<void> => {
        let res: any = [];
        const url = getUrl(endpoint);
        // console.log("url escolhida:...", url);

        if (!params) {
            params = {};
        }

        params.api_key = store.apiKey;

        // console.log("params...", params);

        params = arrayToString(params);

        // console.log("params after array to string...", params);

        const options: any = {
            url: url,
            params: params,
            method: method ? method.toLowerCase() : 'get',
        };

        // console.log("options...", options);

        await CapacitorHttp.get(options)
            .then((response) => {
                // console.log("response...", response);
                res = response.data;
            })
            .catch((error) => {
                // console.log("error...", error);
                return Promise.reject(new Error(error));
            });

        return res;
    };

    return {
        connect: connect,
    };
}
