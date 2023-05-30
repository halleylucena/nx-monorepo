import {
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    useIonLoading,
} from '@ionic/react';
import {
    printSharp,
    documentSharp,
    mailSharp,
    giftSharp,
    documentTextSharp,
    copySharp,
    logoEuro,
    carSharp,
    create,
    close,
} from 'ionicons/icons';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import * as docsLogic from '../logic/documentsLogic';
import * as fn from '../logic/functions';
interface props {
    apiKey: string;
}

const DocumentDetailOptions: React.FC<props> = ({ apiKey }) => {
    const { id } = useParams<{ id: string }>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [present, dismiss] = useIonLoading();
    const docType = useRef<string | undefined>();

    const document = useQuery(
        ['document', id],
        () => docsLogic.getDocDetail(apiKey, id),
        { staleTime: 60 * 1000 }
    );

    if (document.isSuccess) {
        docType.current = document.data.type;
    }

    if (document.isLoading) {
        return <></>;
    }

    if (document.isError) {
        return (
            <IonList>
                <IonItem>
                    <IonLabel>
                        <IonText className="ion-padding">
                            Something went wrong...
                        </IonText>
                    </IonLabel>
                </IonItem>
            </IonList>
        );
    }

    const showLoading = (msg: string) => {
        present({
            message: msg,
        });
    };

    return (
        <IonList lines="full" className="ion-no-padding">
            {fn.docPermission(docType.current, 'edit') ? (
                <IonItem className="FS" button detail={true}>
                    <IonIcon icon={create} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Editar</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'print') ? (
                <IonItem
                    className="FT"
                    button
                    detail={true}
                    onClick={() => {
                        showLoading('A imprimir...');
                        setTimeout(() => dismiss(), 3000);
                    }}
                >
                    <IonIcon icon={printSharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Imprimir</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'sendEmail') ? (
                <IonItem
                    className="NH"
                    button
                    detail={true}
                    onClick={() => {
                        showLoading('A Enviar Email...');
                        setTimeout(() => dismiss(), 3000);
                    }}
                >
                    <IonIcon icon={mailSharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Enviar por E-mail</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'cancel') ? (
                <IonItem className="RG" button detail={true}>
                    <IonIcon icon={close} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Anular</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'creditNote') ? (
                <IonItem className="NC" button detail={true}>
                    <IonIcon icon={documentTextSharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Nota de Crédito</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'createTransport') ? (
                <IonItem className="FS" button detail={true}>
                    <IonIcon icon={carSharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Criar Transporte</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'offerCoupon') ? (
                <IonItem className="FR" button detail={true}>
                    <IonIcon icon={giftSharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Talão de Oferta</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'copyToSale') ? (
                <IonItem className="RC" button detail={true}>
                    <IonIcon icon={copySharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Copiar para a venda</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'downloadPdf') ? (
                <IonItem
                    className="GO"
                    button
                    detail={true}
                    onClick={() => {
                        showLoading('Downloading PDF...');
                        docsLogic.downloadPdf(
                            apiKey,
                            id,
                            document.data.number,
                            dismiss
                        );
                    }}
                >
                    <IonIcon icon={documentSharp} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Download PDF</h3>
                    </IonLabel>
                </IonItem>
            ) : null}

            {fn.docPermission(docType.current, 'registerPayment') ? (
                <IonItem button detail={true}>
                    <IonIcon icon={logoEuro} slot="start"></IonIcon>
                    <IonLabel>
                        <h3>Registrar Pagamento</h3>
                    </IonLabel>
                </IonItem>
            ) : null}
        </IonList>
    );
};

export default DocumentDetailOptions;

export const useDocumentDetailsOptions = (apiKey: string) => {
    const details = DocumentDetailOptions({
        apiKey: apiKey,
    });

    return {
        details,
    };
};
