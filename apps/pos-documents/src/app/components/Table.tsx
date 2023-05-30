import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Table.css';

type header = {
    title: string;
    size?: string | undefined;
    end?: boolean;
};

interface props {
    headers: header[];
    items: any[];
}

const Table: React.FC<props> = ({ headers, items }) => {
    const [sizes, setSizes] = useState<any[]>([]);
    const [end, setEnd] = useState<any[]>([]);

    useEffect(() => {
        headers.forEach((header) => {
            setSizes((sizes) => [...sizes, header.size]);
            setEnd((end) => [...end, header.end]);
        });
    }, [headers]);

    return (
        <IonGrid className="no-padding">
            <IonRow className="header-row">
                {headers.map((header, index) => {
                    return (
                        <IonCol
                            key={index}
                            size={header.size}
                            className={`text-bold ${
                                header.end ? 'ion-text-end' : ''
                            }`}
                        >
                            {header.title}
                        </IonCol>
                    );
                })}
            </IonRow>
            {items.map((item, index) => {
                const props = Object.keys(item);
                return (
                    <IonRow key={index} className="row">
                        {props.map((prop, index) => {
                            return (
                                <IonCol
                                    size={sizes[index]}
                                    key={index}
                                    className={`${
                                        end[index] ? 'ion-text-end' : ''
                                    }`}
                                >
                                    {item[prop]}
                                </IonCol>
                            );
                        })}
                    </IonRow>
                );
            })}
        </IonGrid>
    );
};

export default Table;
