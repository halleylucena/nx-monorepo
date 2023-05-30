import Socket from '@vendus/sockets-for-cordova';
import { stringToUint8Array } from '../utils';
import { useIonAlert } from '@ionic/react';
import useStore from '../../store/store';
import { useApi } from '../api/useApi';

export function usePrintersMobile() {
    const store: any = useStore();
    const api = useApi();
    const [present] = useIonAlert();

    const openConnection = async (socket: any, ip: any, port: any) => {
        console.log('Opening connection', ip, port);
        return await new Promise<void>((resolve, reject) => {
            socket.open(
                ip,
                port,
                () => {
                    console.log('Open success!');
                    resolve(socket);
                },
                (res: any) => {
                    console.log('Open error!', res);
                    reject(res);
                }
            );
        });
    };

    const sendPrint = async (id: number | null) => {
        await getData(id).then((data: any) => {
            const socket = new Socket();
            const ip = data.ip;
            const port = data.port;
            openConnection(socket, ip, port)
                .then(
                    (socket: any) => {
                        const content = stringToUint8Array(atob(data.content));
                        socket.write(
                            content,
                            () => {
                                console.log('Write success!');
                            },
                            (res: any) => {
                                console.log('Write error:', res);
                            }
                        );
                        socket.shutdownWrite(
                            () => console.log('Shutdown success'),
                            (res: any) => console.log('Shutdown error:', res)
                        );
                    },
                    async (res: any) => {
                        console.log('Error opening connection', res);
                        await openConnection(socket, ip, port).then(
                            (socket: any) => {
                                const content = stringToUint8Array(
                                    atob(data.content)
                                );
                                socket.write(
                                    content,
                                    () => {
                                        console.log('Write success!');
                                    },
                                    (res: any) => {
                                        console.log('Write error:', res);
                                    }
                                );
                                socket.shutdownWrite(
                                    () => console.log('Shutdown success'),
                                    (res: any) =>
                                        console.log('Shutdown error:', res)
                                );
                            },
                            (res: any) => {
                                console.log('Error opening connection', res);
                                present({
                                    header: 'Falha na impressão',
                                    message:
                                        'Não foi possível conectar a impressora, Tente novamente.',
                                    buttons: ['OK'],
                                });
                            }
                        );
                    }
                )
                .then(() => {
                    socket.close(
                        () => console.log('Close success'),
                        (res: any) => console.log('Close error:', res)
                    );
                });
        });
    };

    const getData = async (id: number | null) => {
        let res: any = [];

        return await api
            .connect('delivery/' + id + '/print', {}, 'get')
            .then((response: any) => {
                res = response;
                // console.log("res after connect...", res);

                res.print = {
                    ip: store.configuredPrinter.host ?? '',
                    port: store.configuredPrinter.port ?? '9100',
                    status: store.configuredPrinter.status ?? false,
                    printer: store.configuredPrinter.name ?? '',
                };
                // console.log("res after res.print...", res);

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
                // console.log("data before return...", data);
                return data;
            });
    };

    return {
        openConnection: openConnection,
        sendPrint: sendPrint,
    };
}
