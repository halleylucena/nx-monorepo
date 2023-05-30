import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonList,
    IonModal,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    useIonViewWillLeave,
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import './DocumentsPage.scss';
import * as docsLogic from '../logic/documentsLogic';
import { useQuery } from '@tanstack/react-query';
import ListItem from '../components/ListItem';
import DocumentsHeader from '../components/DocumentsHeader';
import { useFilter } from '../components/Filter';
const iconEmpty = '/assets/img/icon-empty.svg';

interface props {
    typesFiltered: string[];
    setTypesFiltered: any;
    apiKey: string;
}

const DocumentsPage: React.FC<props> = ({
    typesFiltered,
    setTypesFiltered,
    apiKey,
}) => {
    const [page, setPage] = useState(1);
    const documentsQty = useRef(0);
    const pageQty = useRef(0);
    const [query, setQuery] = useState<string>('');
    const documents = useQuery(
        ['documents', page, query],
        () => docsLogic.getDocsList(apiKey, page, typesFiltered, query),
        { keepPreviousData: true, staleTime: 60 * 1000 }
    );

    const filter = useFilter(typesFiltered, setTypesFiltered);

    // Filters in mobile
    const modal = useRef<HTMLIonModalElement>(null);
    // End Filters in mobile

    useEffect(() => {
        documents.refetch();
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typesFiltered, query]);

    useIonViewWillLeave(() => {
        setPage(1);
        setQuery('');
    });

    if (documents.isSuccess) {
        if (documents.data.headers.length > 0) {
            documentsQty.current = parseFloat(
                documents.data?.headers[0].match(/\d+/g)
            );
            pageQty.current = parseFloat(
                documents.data?.headers[1].match(/\d+/g)
            );
        }
    }

    if (documents.isError) {
        return <p>Something went wrong...</p>;
    }

    // if (documents.isLoading) {
    //     return (
    //         <div className="ion-padding-start">
    //             <BulletList width={"70%"} />
    //             <BulletList width={"70%"} />
    //         </div>
    //     )
    // }

    const previousPage = () => {
        setPage((old) => Math.max(old - 1, 0));
    };

    const nextPage = () => {
        if (!documents.isPreviousData) {
            setPage((old) => old + 1);
        }
    };

    const setQueryString = (queryString: string) => {
        setQuery(queryString);
    };

    return (
        <IonPage>
            <DocumentsHeader setQueryString={setQueryString} />

            <IonContent fullscreen>
                <IonGrid className="h--100">
                    <IonRow className="h--100">
                        <IonCol
                            size="12"
                            size-sm="3"
                            className="side-menu ion-hide-lg-down"
                        >
                            {filter.filter}
                        </IonCol>
                        <IonCol size="12" size-lg="9">
                            {documents.isSuccess ? (
                                <>
                                    <IonButton
                                        size="small"
                                        id="open-modal"
                                        expand="full"
                                        className="ion-hide-lg-up"
                                    >
                                        Filters
                                    </IonButton>
                                    <IonModal ref={modal} trigger="open-modal">
                                        <IonHeader>
                                            <IonToolbar>
                                                <IonButtons slot="start">
                                                    <IonButton
                                                        onClick={() =>
                                                            modal.current?.dismiss()
                                                        }
                                                    >
                                                        Cancel
                                                    </IonButton>
                                                </IonButtons>

                                                <IonButtons slot="end">
                                                    <IonButton
                                                        strong={true}
                                                        onClick={() =>
                                                            modal.current?.dismiss()
                                                        }
                                                    >
                                                        Confirm
                                                    </IonButton>
                                                </IonButtons>
                                            </IonToolbar>
                                        </IonHeader>
                                        <IonContent className="ion-padding">
                                            {filter.filter}
                                        </IonContent>
                                    </IonModal>
                                    <IonList lines="full">
                                        {documents.data.response.length > 0 ? (
                                            documents.data.response.map(
                                                (doc: any) => {
                                                    return (
                                                        <ListItem
                                                            item={doc}
                                                            key={doc.id}
                                                            isFetching={
                                                                documents.isFetching
                                                            }
                                                            isPreviousData={
                                                                documents.isPreviousData
                                                            }
                                                        />
                                                    );
                                                }
                                            )
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
                                                                    src={
                                                                        iconEmpty
                                                                    }
                                                                />
                                                            </IonRow>
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonTitle className="ion-margin-top ion-margin-bottom">
                                                        Não foi encontrado
                                                        Dados.
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
                                    </IonList>
                                </>
                            ) : null}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            {documents.isSuccess ? (
                                <>
                                    <IonCol
                                        className="borders-x"
                                        size="3"
                                        size-sm="auto"
                                        offset-sm="3"
                                    >
                                        <IonButtons className="ion-justify-content-center">
                                            <IonButton
                                                onClick={previousPage}
                                                disabled={page === 1}
                                            >
                                                <IonIcon
                                                    slot="icon-only"
                                                    icon={chevronBack}
                                                ></IonIcon>
                                            </IonButton>
                                            <IonButton
                                                onClick={nextPage}
                                                disabled={
                                                    page === pageQty.current
                                                }
                                            >
                                                <IonIcon
                                                    slot="icon-only"
                                                    icon={chevronForward}
                                                ></IonIcon>
                                            </IonButton>
                                        </IonButtons>
                                    </IonCol>
                                    <IonCol className="borders-x">
                                        <IonTitle>{`${page}/${pageQty.current}`}</IonTitle>
                                    </IonCol>
                                    <IonCol
                                        className="borders-x"
                                        size="4"
                                        size-sm="auto"
                                    >
                                        <IonTitle>{`${documentsQty.current} Documentss`}</IonTitle>
                                    </IonCol>
                                </>
                            ) : null}
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default DocumentsPage;
