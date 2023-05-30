import { isPlatform } from '@ionic/react';

export function pad(n: number, length: number) {
    let len = length - ('' + n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n;
}

export function stringToArrayBuffer(str: string) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);

    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }

    return buf;
}

export function stringToUint8Array(str: string) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);

    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }

    return bufView;
}

export const parseQueryString = () => {
    const params: any = {};
    let queryString: any = window.location.search;
    queryString = queryString.replace('?', '');
    queryString = queryString.split('&');
    queryString.forEach((value: any) => {
        const param = value.split('=');
        params[param[0]] = param[1];
    });
    return params;
};

export const parseCookies = () => {
    if (!document.cookie) {
        return false;
    }

    const cookies: any = document.cookie.split(';');
    const data: any = {};

    for (let i = 1; i <= cookies.length; i++) {
        const cookie: any = cookies[i - 1].split('=');
        data[cookie[0].replace(' ', '')] = cookie[1].replace(' ', '');
    }

    return data;
};

export const arrayToString = (o: any) => {
    Object.keys(o).forEach((k) => {
        if (typeof o[k] === 'object') {
            return arrayToString(o[k]);
        }

        o[k] = '' + o[k];
    });

    return o;
};

export const isHostDev = () => {
    const hostOnline = 'pos.vendus.pt';
    if (
        !isPlatform('mobileweb') &&
        (isPlatform('ios') || isPlatform('android'))
    ) {
        return false;
    }
    if (window.location.host !== hostOnline) {
        return true;
    }
    return false;
};

export const isHostOnline = () => {
    return !isHostDev();
};

export const dateDifference = (time: Date) => {
    const now = new Date();
    const currentTime = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000
    ).getTime();
    const updateTime = new Date(time).getTime();
    return currentTime - updateTime - 60 * 60 * 1000;
};

export const diffToDate = (time: string) => {
    const currentDate = new Date();
    const newDate = new Date(time + '+00:00');
    // let timeZone = currentDate.getTimezoneOffset();
    const diff = currentDate.getTime() - newDate.getTime();
    return new Date(diff);
};
