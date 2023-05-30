import {
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonImg,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import './ProductsPage.scss';
import * as prodsLogic from '../logic/productsLogic';
import ProductsHeader from '../components/ProductsHeader';
import { useQuery } from '@tanstack/react-query';
import Product from '../components/Product';
import Sales from '../components/Sales';
const iconEmpty = '/assets/img/icon-empty.svg';

interface props {
    apiKey: string;
}

const ProductsPage: React.FC<props> = ({ apiKey }) => {
    const products = useQuery(
        ['products'],
        () => prodsLogic.getProdsList(apiKey),
        { keepPreviousData: true, staleTime: 60 * 1000 }
    );
    const [query, setQuery] = useState<string>('');

    const setQueryString = (queryString: string) => {
        setQuery(queryString);
    };

    // if (products.isSuccess) {
    //     if (products.data.headers.length > 0) {
    //         console.log("Products: ", products.data);
    //     }
    // }

    if (products.isError) {
        return <p>Something went wrong...</p>;
    }

    return (
        <IonPage>
            <ProductsHeader setQueryString={setQueryString} />

            <IonContent fullscreen>
                <IonGrid className="h--100">
                    <IonRow className="h--100">
                        <IonCol size="12" size-lg="8" className="side-menu">
                            {products.isSuccess ? (
                                <div>
                                    {products.data.response.length > 0 ? (
                                        <IonGrid
                                            fixed={true}
                                            className="product-list"
                                        >
                                            <IonRow>
                                                {products.data.response.map(
                                                    (product: any) => {
                                                        return (
                                                            <Product
                                                                item={product}
                                                                key={product.id}
                                                                isFetching={
                                                                    products.isFetching
                                                                }
                                                                isPreviousData={
                                                                    products.isPreviousData
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </IonRow>
                                        </IonGrid>
                                    ) : (
                                        <IonRow className="ion-align-items-center ion-justify-content-center">
                                            <IonCol
                                                className="ion-text-center ion-margin-top"
                                                size="auto"
                                            >
                                                <IonRow className="ion-justify-content-center">
                                                    <IonCol size="8">
                                                        <IonRow className="ion-justify-content-center">
                                                            <IonImg
                                                                className=""
                                                                src={iconEmpty}
                                                            />
                                                        </IonRow>
                                                    </IonCol>
                                                </IonRow>
                                                <IonTitle className="ion-margin-top ion-margin-bottom">
                                                    Não foi encontrado Dados.
                                                </IonTitle>
                                                <IonText class="ion-margin-top">
                                                    Não existem dados
                                                    disponíveis nesta busca.
                                                    Ajuste o filtro, se
                                                    necessário.
                                                </IonText>
                                            </IonCol>
                                        </IonRow>
                                    )}
                                </div>
                            ) : null}
                        </IonCol>
                        <IonCol size="12" size-sm="4">
                            <Sales />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12" className="ion-text-center">
                                <p>Footer</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ProductsPage;
