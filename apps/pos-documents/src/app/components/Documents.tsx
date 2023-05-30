import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';
import './Documents.css';
import { BulletList } from 'react-content-loader';
import { useQuery } from '@tanstack/react-query';

interface props {
    documentsList: any[];
    isSuccess: boolean;
    isLoading: boolean;
}

const Documents: React.FC<props> = ({ documentsList, isSuccess }) => {
    // const { isLoading } = useQuery('documents');

    // if (isLoading) {
    //     return (
    //         <div className="ion-padding-start">
    //             <BulletList width={"70%"} />
    //             <BulletList width={"70%"} />
    //         </div>
    //     )
    // }

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isSuccess ? (
                <IonList>
                    {documentsList.map((doc: any) => (
                        <IonItem
                            key={doc.id}
                            routerLink={`/documents/${doc.id}`}
                            button
                            detail={true}
                        >
                            <IonBadge slot="start" className={doc.type}>
                                {doc.type ? doc.type : 'ZZ'}
                            </IonBadge>
                            <IonLabel>
                                <h2>{doc.number ? doc.number : 'NO NUMBER'}</h2>
                                <p>{doc.date ? doc.date : ''}</p>
                            </IonLabel>
                            <IonLabel slot="end" color="medium">
                                {doc.amount_gross ? doc.amount_gross : 'ZZ'}
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            ) : null}
        </>
    );
};

export default Documents;
