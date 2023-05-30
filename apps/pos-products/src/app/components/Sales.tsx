import {
    IonButton,
    IonCol,
    IonGrid,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonText,
} from '@ionic/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { addCircle, arrowBack, arrowForward, close } from 'ionicons/icons';
import './Sales.scss';
import { useRef, useState } from 'react';

const Sales: React.FC = () => {
    const actualSale = useQuery([['actualSale']], () => 0, {
        staleTime: Infinity,
    });
    const sales = useQuery(['sales', actualSale.data], () => [], {
        staleTime: Infinity,
    });
    const queryClient = useQueryClient();

    if (sales.isError) {
        return <p>Something went wrong...</p>;
    }

    const decreaseActualSale = () => {
        queryClient.setQueryData(['actualSale'], (oldSale: any) => {
            // verify if actualSale is 0 if it is return 0 if not return actualSale - 1
            return oldSale === 0 ? 0 : oldSale - 1;
        });
    };

    const increaseActualSale = () => {
        queryClient.setQueryData(['actualSale'], (oldSale: any) => {
            // add 1 to actualSale
            return oldSale + 1;
        });
    };

    const deleteFromSale = (id: string) => {
        // delete item from sale, if qty is 1 delete item if not decrease qty by 1
        queryClient.setQueryData(['sales', actualSale.data], (oldData: any) => {
            const itemInSale = oldData.find(
                (saleItem: any) => saleItem.id === id
            );
            if (itemInSale.qty >= 1) {
                itemInSale.qty = itemInSale.qty - 1;
            }
            return itemInSale.qty >= 1
                ? [...oldData]
                : oldData.filter((item: any) => item.id !== id);
        });
    };

    return (
        <IonGrid>
            <IonRow className="ion-justify-content-center">
                <IonCol className="ion-justify-content-start flex">
                    <IonButton
                        fill="clear"
                        onClick={() => decreaseActualSale()}
                    >
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                </IonCol>
                <IonCol className="ion-justify-content-center flex ion-align-items-center">
                    <IonText>{`Sale ${
                        typeof actualSale.data === 'number'
                            ? actualSale.data + 1
                            : null
                    }`}</IonText>
                    <IonButton
                        fill="clear"
                        onClick={() => increaseActualSale()}
                    >
                        <IonIcon icon={addCircle} />
                    </IonButton>
                </IonCol>
                <IonCol className="ion-justify-content-end flex">
                    <IonButton
                        fill="clear"
                        onClick={() => increaseActualSale()}
                    >
                        <IonIcon icon={arrowForward} />
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonList lines="full" className="full-width">
                    <>
                        {sales.data?.map((item: any) => {
                            return (
                                <IonItem key={item.id}>
                                    <IonText slot="start">{item.qty}</IonText>
                                    <IonLabel>{item.title}</IonLabel>
                                    <IonButton
                                        slot="end"
                                        fill="clear"
                                        onClick={() => deleteFromSale(item.id)}
                                    >
                                        <IonIcon icon={close} />
                                    </IonButton>
                                </IonItem>
                            );
                        })}
                    </>
                </IonList>
            </IonRow>
        </IonGrid>
    );
};

export default Sales;
