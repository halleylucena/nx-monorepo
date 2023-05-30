import { IonCol } from '@ionic/react';
import ListItemLoader from './loaders/ListItemLoader';
import './Product.scss';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface props {
    item: {
        id: string;
        type: string;
        number: string;
        date: string;
        amount_gross: string;
        title: string;
        prices: {
            gross: string;
            net: string;
        };
    };
    isFetching: any;
    isPreviousData: boolean;
}

const Product: React.FC<props> = ({ item, isFetching, isPreviousData }) => {
    const queryClient = useQueryClient();
    const actualSale = useQuery(['actualSale'], () => 0, {
        staleTime: Infinity,
    });

    const addToSale = async (item: any) => {
        queryClient.setQueryData(['sales', actualSale.data], (oldData: any) => {
            // verify if item is already in sale if it is add 1 to qty if not add item to sale
            const itemInSale = oldData.find(
                (saleItem: any) => saleItem.id === item.id
            );
            if (itemInSale) {
                itemInSale.qty = itemInSale.qty + 1;
            }
            return itemInSale
                ? [...oldData]
                : [...oldData, { ...item, qty: 1 }];
        });
    };

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isFetching && isPreviousData ? (
                <ListItemLoader />
            ) : (
                <IonCol
                    onClick={() => addToSale(item)}
                    size="1"
                    size-md="1"
                    sizeLg="1"
                    sizeSm="3"
                    sizeXs="3"
                    className="product-item"
                >
                    <span>{item.title}</span>
                    <span className="price-bold">€ {item.prices.gross}</span>
                </IonCol>
            )}
        </>
    );
};

export default Product;
