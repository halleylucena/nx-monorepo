import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonRow,
    IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import PopOverMenu from '../components/PopOverMenu';
import { arrowBackSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

import DocumentDetail from '../components/DocumentDetail';
import { useDocumentDetailsOptions } from '../components/DocumentDetailOptions';

interface props {
    apiKey: string;
}

const DocumentDetailPage: React.FC<props> = ({ apiKey }) => {
    const { id } = useParams<{ id: string }>();
    const documentOptions = useDocumentDetailsOptions(apiKey);
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                        <IonButton onClick={() => history.push('/documents')}>
                            <IonIcon
                                icon={arrowBackSharp}
                                slot="start"
                            ></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonButtons slot="end" className="ion-hide-lg-up">
                        <React.Suspense>
                            <PopOverMenu children={documentOptions.details} />
                        </React.Suspense>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonGrid className="h--100">
                    <IonRow className="h--100">
                        <IonCol size="12" size-lg="9">
                            <DocumentDetail apiKey={apiKey} id={id} />
                        </IonCol>
                        <IonCol
                            className="side-menu ion-hide-lg-down"
                            size="12"
                            size-sm="3"
                        >
                            {documentOptions.details}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default DocumentDetailPage;
