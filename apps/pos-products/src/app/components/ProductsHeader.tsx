import {
    IonButtons,
    IonCol,
    IonHeader,
    IonMenuButton,
    IonSpinner,
    IonTitle,
    IonToolbar,
    useIonViewWillLeave,
} from '@ionic/react';
import { useState } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import Search from './Search';

interface props {
    setQueryString: any;
}

const ProductsHeader: React.FC<props> = ({ setQueryString }) => {
    const isFetching = useIsFetching();
    const [showSearch, setShowSearch] = useState(false);

    useIonViewWillLeave(() => {
        setShowSearch(false);
    });

    const setQuery = (queryString: string) => {
        setQueryString(queryString);
    };

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" className="header-buttons">
                    <IonMenuButton />
                    <IonCol className="title-spinner">
                        <IonTitle className="title ion-no-padding ion-padding-end">
                            Products
                        </IonTitle>
                        {isFetching ? (
                            <IonSpinner
                                className="spinner"
                                name="dots"
                            ></IonSpinner>
                        ) : null}
                    </IonCol>
                </IonButtons>

                <Search
                    placeholder="Busca..."
                    setQueryString={setQuery}
                    disabled={isFetching ? true : false}
                    focusSearchBar={showSearch}
                />
            </IonToolbar>
        </IonHeader>
    );
};

export default ProductsHeader;
