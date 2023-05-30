import {
    IonBadge,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
} from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import * as fn from '../logic/functions';

interface props {
    typesFiltered: string[];
    setTypesFiltered: any;
}

const Filter: React.FC<props> = ({ typesFiltered, setTypesFiltered }) => {
    const isFetching = useIsFetching();

    const [all, setAll] = useState(true);
    const typesRef = useRef(typesFiltered);

    const checkUncheck = () => {
        setAll(!all);
    };

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setTypesFiltered(typesRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggle = (type: string) => {
        setTimeout(() => {
            const res = fn.toggleArray(typesFiltered, type);
            setTypesFiltered(res);
        }, 0);
    };

    useEffect(() => {
        all ? setTypesFiltered(typesRef.current) : setTypesFiltered([]);
    }, [all, setTypesFiltered]);

    return (
        <div className="ion-padding-top">
            <IonTitle className="ion-no-padding ion-padding-bottom">
                Document Types
            </IonTitle>
            <IonList lines="full">
                <IonItem key="all" disabled={isFetching ? true : false}>
                    <IonCheckbox
                        checked={all}
                        onClick={checkUncheck}
                        slot="start"
                    ></IonCheckbox>
                    <IonBadge className="DC">T</IonBadge>
                    <IonLabel className="ion-padding-start">Todos</IonLabel>
                </IonItem>
                {docTypes.map((docType, index) => {
                    return (
                        <IonItem
                            key={index}
                            disabled={isFetching ? true : false}
                        >
                            <IonCheckbox
                                onClick={() => toggle(docType.symbol)}
                                value={docType.symbol}
                                checked={typesFiltered.includes(docType.symbol)}
                                slot="start"
                            ></IonCheckbox>
                            <IonBadge className={docType.class}>
                                {docType.symbol}
                            </IonBadge>
                            <IonLabel className="ion-padding-start">
                                {docType.title}
                            </IonLabel>
                        </IonItem>
                    );
                })}
            </IonList>
        </div>
    );
};

export const useFilter = (typesFiltered: string[], SetTypesFiltered: any) => {
    const filter = Filter({
        typesFiltered: typesFiltered,
        setTypesFiltered: SetTypesFiltered,
    });

    return {
        filter,
    };
};

export default Filter;

interface DocTypes {
    title: string;
    symbol: string;
    class: string;
}

const docTypes: DocTypes[] = [
    {
        title: 'Consulta de Mesa',
        symbol: 'DC',
        class: 'DC',
    },
    {
        title: 'Encomenda',
        symbol: 'EC',
        class: 'EC',
    },
    {
        title: 'Fatura',
        symbol: 'FT',
        class: 'FT',
    },
    {
        title: 'Fatura Pró-Forma',
        symbol: 'PF',
        class: 'PF',
    },
    {
        title: 'Fatura Recibo',
        symbol: 'FR',
        class: 'FR',
    },
    {
        title: 'Fatura Simplificada',
        symbol: 'FS',
        class: 'FS',
    },
    {
        title: 'Guia de Ativos Próprios',
        symbol: 'GA',
        class: 'GA',
    },
    {
        title: 'Guia de Devolução',
        symbol: 'GD',
        class: 'GD',
    },
    {
        title: 'Nota de Crédito',
        symbol: 'NC',
        class: 'NC',
    },
    {
        title: 'Orçamento',
        symbol: 'OT',
        class: 'OT',
    },
    {
        title: 'Guia de Transporte',
        symbol: 'GT',
        class: 'GT',
    },
    {
        title: 'Guia de Remessa',
        symbol: 'GR',
        class: 'GR',
    },
    {
        title: 'Recibo',
        symbol: 'RG',
        class: 'RG',
    },
];
