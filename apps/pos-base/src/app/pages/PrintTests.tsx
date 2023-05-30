import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonItemDivider,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToast,
    IonToolbar,
    isPlatform,
    useIonViewDidEnter,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Printer.scss';
import useStore from '../store/store';
import ApiDesktop from '../logic/apiDesktop';
import { usePrinters } from '../logic/printers/usePrinters';
import { useHistory } from 'react-router';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial';
import { stringToUint8Array } from '../logic/utils';

const PrintTests: React.FC = () => {
    const store: any = useStore();
    const printers = usePrinters();
    const history = useHistory();

    const [host, setHost] = useState<string | null | undefined>(
        store.configuredPrinter.host
    );
    const [port, setPort] = useState<string | null | undefined>(
        store.configuredPrinter.port
    );
    const [doc, setDoc] = useState<any>('3484708');

    function configPrinter(name: string) {
        console.log('Saving printer config');
        store.setConfiguredPrinter({ name, host, port, status: true });
    }

    const eventClickPrint = async () => {
        await printers.sendPrintTest(parseInt(doc));
    };

    // For Bluetooth
    const [blDevices, setBlDevices] = useState<any>([]);
    const [blDeviceChosen, setBlDeviceChosen] = useState<any>(null);
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    const scanDevices = async () => {
        if (!isPlatform('capacitor')) {
            console.log('Not capacitor');
            return;
        }

        BluetoothSerial.isEnabled().then(
            async (data: any) => {
                console.log('Bluetooth is Enabled', data);
                console.log('Scanning devices');
                await BluetoothSerial.list().then((data: any) => {
                    console.log('Devices found', data);
                    setToastMsg('Devices found!');
                    setIsToastOpen(true);
                    setBlDevices(data);
                });
            },
            async (error: any) => {
                console.log('Bluetooth is not Enabled', error);
                const enable = await BluetoothSerial.enable();
                console.log('Enabled', enable);
                scanDevices();
            }
        );
    };

    const setChosenDevice = (device: any) => {
        setBlDeviceChosen(device);
        setToastMsg(`Dispositivo escolhido: ${device.name}`);
        setIsToastOpen(true);
    };

    const connect = async () => {
        const content =
            'G0AKIAogCiAKIAogChthMRshIE1lc2EgMQpTYWxhIE9ubGluZQobIQAbYTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tChthMTE1OjU2ChthMC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KChshIDMgeCBDb2NhLUNvbGEKChshAC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KG2ExCk9wZXJhZG9yOiBGYWJpbyBUZWl4ZWlyYQoKG0r+G20=';
        BluetoothSerial.connect(blDeviceChosen.address).subscribe(
            async (data: any) => {
                console.log('Connected', data);
                const buffer = stringToUint8Array(atob(content));
                const write = await BluetoothSerial.write(buffer);
                console.log('Write', write);
                setToastMsg('Print Success!');
                setIsToastOpen(true);
                BluetoothSerial.clear();
                BluetoothSerial.disconnect();
            },
            (error: any) => {
                console.log('Error', error);
                setToastMsg(`Error: ${error}`);
                setIsToastOpen(true);
                BluetoothSerial.clear();
                BluetoothSerial.disconnect();
            }
        );
    };

    useEffect(() => {
        console.log('Bluetooth devices...', blDevices);
    }, [blDevices]);

    useIonViewDidEnter(async () => {
        if (isPlatform('capacitor')) {
            return;
        }
        setTimeout(() => {
            const apiDesktop = new ApiDesktop();
            apiDesktop
                .getPrints()
                .then(async (list: any) => {
                    printers.setFoundPrinters(list);
                    printers.setLoadedPrinters(true);
                })
                .catch(() => {
                    printers.setLoadedPrinters(true);
                    history.push('/home');
                    console.log(
                        'Não foi possível ligar ao Vendus Dispositivos!'
                    );
                });
        }, 1000);
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>

                    <IonTitle>Print Tests</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div className="ion-padding">
                    <IonList lines="none">
                        <IonItemDivider className="ion-margin-bottom">
                            <IonLabel>Ethernet</IonLabel>
                        </IonItemDivider>
                        <IonItem>
                            <div>
                                <div className="printer__custom-input">
                                    <IonLabel className="ion-padding-bottom">
                                        Endereço de IP
                                    </IonLabel>
                                    <IonInput
                                        value={host}
                                        className="ion-no-padding ion-padding-bottom"
                                        type="text"
                                        placeholder="ex.: 192.168.1.30"
                                        maxlength={15}
                                        onIonChange={(e) => {
                                            setHost(e.detail.value);
                                        }}
                                    ></IonInput>
                                </div>
                                <div className="printer__custom-input">
                                    <IonLabel className="ion-padding-bottom">
                                        Porta
                                    </IonLabel>
                                    <IonInput
                                        value={port}
                                        className="ion-no-padding ion-padding-bottom"
                                        type="text"
                                        placeholder="ex.: 9100"
                                        onIonChange={(e) => {
                                            setPort(e.detail.value);
                                        }}
                                    ></IonInput>
                                </div>
                                <div className="printer__custom-input">
                                    <IonLabel className="ion-padding-bottom">
                                        Id delivery testes 3484708
                                    </IonLabel>
                                    <IonInput
                                        value={doc}
                                        className="ion-no-padding ion-padding-bottom"
                                        type="text"
                                        placeholder="ex.: 9100"
                                        onIonChange={(e) => {
                                            setDoc(e.detail.value);
                                        }}
                                    ></IonInput>
                                </div>
                            </div>
                            <IonButtons className="ion-padding-start">
                                <IonButton
                                    fill="solid"
                                    color="primary"
                                    size="default"
                                    onClick={() => {
                                        configPrinter('_custom_');
                                    }}
                                >
                                    Salvar
                                </IonButton>
                                <IonButton
                                    fill="solid"
                                    color="primary"
                                    size="default"
                                    onClick={async () => {
                                        console.log('click in test');
                                        eventClickPrint();
                                    }}
                                >
                                    Imprimir Teste
                                </IonButton>
                            </IonButtons>
                        </IonItem>
                        <IonItemDivider className="ion-margin-bottom">
                            <IonLabel>Bluetooth</IonLabel>
                        </IonItemDivider>
                        <IonItem>
                            <IonGrid className="ion-no-padding">
                                <IonRow className="ion-margin-bottom">
                                    <IonCol size="16">
                                        <IonButtons>
                                            <IonButton
                                                fill="solid"
                                                color="primary"
                                                size="default"
                                                onClick={() => scanDevices()}
                                            >
                                                Escanear
                                            </IonButton>
                                        </IonButtons>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="4">
                                        {blDevices.length > 0 ? (
                                            <>
                                                <IonLabel className="ion-padding-bottom">
                                                    Itens encontrados
                                                </IonLabel>
                                                <IonList>
                                                    {blDevices.map(
                                                        (
                                                            item: any,
                                                            i: number
                                                        ) => (
                                                            <IonItem
                                                                key={i}
                                                                className="ion-no-padding"
                                                            >
                                                                <IonLabel>
                                                                    {item.name}
                                                                </IonLabel>
                                                                <IonButton
                                                                    onClick={() => {
                                                                        setChosenDevice(
                                                                            blDevices[
                                                                                i
                                                                            ]
                                                                        );
                                                                    }}
                                                                >
                                                                    Escolher
                                                                </IonButton>
                                                            </IonItem>
                                                        )
                                                    )}
                                                </IonList>
                                            </>
                                        ) : null}
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>
                    </IonList>
                    {blDeviceChosen !== null ? (
                        <IonButton
                            fill="solid"
                            color="primary"
                            size="default"
                            onClick={() => connect()}
                        >
                            Imprimir Rascunho
                        </IonButton>
                    ) : null}
                </div>
                <IonToast
                    isOpen={isToastOpen}
                    message={toastMsg}
                    onDidDismiss={() => {
                        setIsToastOpen(false);
                        setToastMsg('');
                    }}
                    duration={4000}
                ></IonToast>
            </IonContent>
        </IonPage>
    );
};

export default PrintTests;
