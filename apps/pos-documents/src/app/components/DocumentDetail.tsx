import './DocumentDetail.css';
import './Documents.css';
import * as docsLogic from '../logic/documentsLogic';
import * as fn from '../logic/functions';
import { Facebook } from 'react-content-loader';
import { useQuery } from '@tanstack/react-query';
import {
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import Table from './Table';
import { useEffect } from 'react';
interface props {
    apiKey: string;
    id: string;
}

const DocumentDetail: React.FC<props> = ({ apiKey, id }) => {
    const document = useQuery(
        ['document', id],
        () => docsLogic.getDocDetail(apiKey, id),
        { staleTime: 60 * 1000 }
    );

    // if (document.isSuccess) {
    //     console.log(document.data)
    // }

    if (document.isLoading) {
        return (
            <div className="ion-padding-start ion-padding-top">
                <Facebook width={'96%'} />
            </div>
        );
    }

    if (document.isError) {
        return (
            <IonGrid className="ion-padding">
                <IonRow>
                    <IonCol
                        size="12"
                        size-sm="5"
                        className="ion-no-padding ion-padding-end"
                    >
                        <div className="error">
                            <IonText className="ion-padding">
                                Something went wrong...
                            </IonText>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        );
    }

    return (
        <>
            <IonToolbar className={`${document.data.type}`}>
                <IonTitle
                    id="detail-doc-title"
                    className="ion-text-center text-white"
                >
                    {document.data.number}
                </IonTitle>
            </IonToolbar>
            <IonGrid className="ion-padding">
                <IonRow>
                    <IonCol
                        size="12"
                        size-sm="5"
                        className="ion-no-padding ion-padding-end"
                    >
                        <IonTitle className="document__header-title">
                            Documento
                        </IonTitle>
                        <div className="flex-column">
                            <IonText className="ion-padding-top">
                                Data: {document.data.date}
                            </IonText>
                            <IonText className="ion-padding-top">
                                Tipo: {document.data.type}
                            </IonText>
                        </div>
                    </IonCol>
                    <IonCol
                        size="12"
                        offset="1"
                        size-sm="6"
                        className="ion-no-padding"
                    >
                        <IonTitle className="document__header-title">
                            Cliente
                        </IonTitle>
                        <div className="flex-column">
                            <IonText className="ion-padding-top">
                                {document.data.client.name}
                                {document.data.client.fiscal_id !== '---------'
                                    ? ' - ' + document.data.client.fiscal_id
                                    : ''}
                            </IonText>
                            <IonText className="ion-padding-top">
                                {document.data.client?.address}
                            </IonText>
                            <IonText className="">{`${
                                document.data.client.postalcode
                                    ? document.data.client.postalcode
                                    : ''
                            }${
                                document.data.client.city
                                    ? ' - ' + document.data.client.city
                                    : ''
                            }`}</IonText>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {/* Movement fo goods */}
            {['GT', 'GA', 'GR', 'GD'].includes(document.data.type) ? (
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol
                            size="12"
                            size-sm="5"
                            className="ion-no-padding ion-padding-end"
                        >
                            <IonTitle className="document__header-title">
                                Local de Carga
                            </IonTitle>
                            <div className="flex-column">
                                <IonText className="ion-padding-top">
                                    {
                                        document.data.movement_of_goods
                                            .landpoint.address
                                    }
                                </IonText>
                                <IonText className="ion-padding-top">
                                    {
                                        document.data.movement_of_goods
                                            .landpoint.postalcode
                                    }{' '}
                                    -{' '}
                                    {
                                        document.data.movement_of_goods
                                            .landpoint.city
                                    }
                                </IonText>
                                <IonText className="ion-padding-top">
                                    {
                                        document.data.movement_of_goods
                                            .landpoint.date
                                    }{' '}
                                    às{' '}
                                    {
                                        document.data.movement_of_goods
                                            .landpoint.time
                                    }
                                </IonText>
                            </div>
                        </IonCol>
                        <IonCol
                            size="12"
                            offset="1"
                            size-sm="6"
                            className="ion-no-padding"
                        >
                            <IonTitle className="document__header-title">
                                Local de Descarga
                            </IonTitle>
                            <div className="flex-column">
                                <IonText className="ion-padding-top">
                                    {
                                        document.data.movement_of_goods
                                            .loadpoint.address
                                    }
                                </IonText>
                                <IonText className="ion-padding-top">
                                    {
                                        document.data.movement_of_goods
                                            .loadpoint.postalcode
                                    }{' '}
                                    -{' '}
                                    {
                                        document.data.movement_of_goods
                                            .loadpoint.city
                                    }
                                </IonText>
                                <IonText className="ion-padding-top">
                                    {
                                        document.data.movement_of_goods
                                            .loadpoint.date
                                    }{' '}
                                    às{' '}
                                    {
                                        document.data.movement_of_goods
                                            .loadpoint.time
                                    }
                                </IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>{document.data.observations}</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            ) : null}
            {/* End Movement fo goods */}

            <div className="ion-padding">
                <Table
                    headers={fn.getHeaderType(document.data.type)}
                    items={fn.toggleDocType(
                        document.data.type,
                        document.data.items
                    )}
                />
            </div>

            <div className="ion-padding">
                <IonGrid className="no-padding">
                    <IonRow>
                        <IonCol size="5" className="ion-no-padding">
                            {document.data.payments ? (
                                <Table
                                    headers={[
                                        {
                                            title: 'Pagamento',
                                            size: '7',
                                        },
                                        {
                                            title: 'Total',
                                            end: true,
                                        },
                                    ]}
                                    items={document.data.payments.map(
                                        (payment: any) => {
                                            return {
                                                title: payment.title,
                                                amount: payment.amount,
                                            };
                                        }
                                    )}
                                />
                            ) : null}
                        </IonCol>
                        <IonCol offset="2" size="5" className="ion-no-padding">
                            {document.data.taxes ? (
                                <Table
                                    headers={[
                                        {
                                            title: 'Taxa',
                                            end: true,
                                        },
                                        {
                                            title: 'Base',
                                            end: true,
                                        },
                                        {
                                            title: 'IVA',
                                            end: true,
                                        },
                                        {
                                            title: 'Total',
                                            end: true,
                                        },
                                    ]}
                                    items={document.data.taxes.map(
                                        (tax: any) => {
                                            return {
                                                rate: `${tax.rate}%`,
                                                base: tax.base,
                                                amount: tax.amount,
                                                total: tax.total,
                                            };
                                        }
                                    )}
                                />
                            ) : null}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>

            <div className="ion-padding">
                <IonGrid className="no-padding">
                    <IonRow>
                        <IonCol offset="7" size="5" className="ion-no-padding">
                            <Table
                                headers={[
                                    {
                                        title: 'Total',
                                    },
                                    {
                                        title: document.data.amount_gross,
                                        end: true,
                                    },
                                ]}
                                items={[]}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>

            {['DC', 'EC', 'PF', 'OT', 'FT', 'FR', 'FS', 'RG'].includes(
                document.data.type
            ) ? (
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol
                            size="12"
                            size-sm="6"
                            className="ion-no-padding ion-padding-end"
                        >
                            <IonTitle className="document__header-title">
                                Informações do Utilizador
                            </IonTitle>
                            <div className="flex-column">
                                <IonText className="ion-padding-top">
                                    Nome: {document.data.status.user_id}
                                </IonText>
                                <IonText className="ion-padding-top">
                                    Loja: {document.data.store_id}
                                </IonText>
                                <IonText className="ion-padding-top">
                                    Caixa: {document.data.register_id}
                                </IonText>
                                <IonText className="ion-padding-top">
                                    Data: {document.data.system_time}
                                </IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            ) : null}
        </>
    );
};

export default DocumentDetail;
