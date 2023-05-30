import { isPlatform } from '@ionic/react';
import useStore from '../../store/store';
import ApiDesktop from '../apiDesktop';
import { usePrintersMobile } from './usePrintersMobile';
import { useApi } from '../api/useApi';

export function usePrinters() {
    const store: any = useStore();
    const printersMobile = usePrintersMobile();
    const api = useApi();

    const setLoadedConfiguredPrinter = (state: boolean) => {
        store.setLoadedConfiguredPrinter(state);
    };

    const setLoadedPrinters = (state: boolean) => {
        store.setLoadedPrinters(state);
    };

    const setConfiguredPrinter = (printer: any) => {
        store.setConfiguredPrinter(printer);
    };

    const setStatusPrint = (status: boolean) => {
        store.setStatusPrint(status);
    };

    const setFoundPrinters = (list: any) => {
        store.setFoundPrinters(list);
    };

    const sendPrintTest = async (id: number | null) => {
        console.log('sendPrintTest', id);
        if (isPlatform('capacitor')) {
            await printersMobile.sendPrint(id);
        } else {
            await printWeb(id);
        }
    };

    const printWeb = async (id: number | null) => {
        let res: any = [];

        return await api
            .connect('delivery/' + id + '/print', {}, 'get')
            .then((response: any) => {
                res = response;

                res.print = {
                    ip: store.configuredPrinter.host ?? '',
                    port: store.configuredPrinter.port ?? '9100',
                    status: store.configuredPrinter.status ?? false,
                    printer: store.configuredPrinter.name ?? '',
                };

                if (res.print.status !== true) {
                    console.log('# Error Print: Status Off #');
                    return;
                }

                const data: any = {
                    content: res.output,
                };

                if (store.configuredPrinter.name === '_custom_') {
                    data.ip = res.print.ip;
                    data.port = parseInt(res.print.port);
                } else {
                    data.id = res.print.printer;
                }

                const apiDesktop = new ApiDesktop();
                apiDesktop.sendPrint(data);

                return data;
            });
    };

    return {
        setLoadedConfiguredPrinter: setLoadedConfiguredPrinter,
        setLoadedPrinters: setLoadedPrinters,
        setConfiguredPrinter: setConfiguredPrinter,
        setStatusPrint: setStatusPrint,
        setFoundPrinters: setFoundPrinters,
        sendPrintTest: sendPrintTest,
    };
}
