import { IonBadge, IonItem, IonLabel } from '@ionic/react';
import ListItemLoader from './loaders/ListItemLoader';
import './ListItem.css';

interface props {
    item: {
        id: string;
        type: string;
        number: string;
        date: string;
        amount_gross: string;
    };
    isFetching: any;
    isPreviousData: boolean;
}

const ListItem: React.FC<props> = ({ item, isFetching, isPreviousData }) => {
    return (
        <IonItem routerLink={`/documents/${item.id}`} button detail={true}>
            {isFetching && isPreviousData ? (
                <ListItemLoader />
            ) : (
                <>
                    <IonBadge slot="start" className={item.type}>
                        {item.type ? item.type : 'ZZ'}
                    </IonBadge>
                    <IonLabel>
                        <h2>{item.number ? item.number : 'NO NUMBER'}</h2>
                        <p>{item.date ? item.date : ''}</p>
                    </IonLabel>
                    <IonLabel slot="end" color="medium">
                        {item.amount_gross ? item.amount_gross : 'ZZ'}
                    </IonLabel>
                </>
            )}
        </IonItem>
    );
};

export default ListItem;
