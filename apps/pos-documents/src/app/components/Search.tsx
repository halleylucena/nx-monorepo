import { IonSearchbar } from '@ionic/react';
import { useEffect, useRef } from 'react';
import './Search.scss';

interface props {
    placeholder: string;
    setQueryString: any;
    disabled: boolean;
    focusSearchBar: boolean;
}

const Search: React.FC<props> = ({
    placeholder,
    setQueryString,
    disabled,
    focusSearchBar,
}) => {
    const searchbarRef = useRef<HTMLIonSearchbarElement>(null);

    useEffect(() => {
        focusSearchBar &&
            setTimeout(() => searchbarRef.current?.setFocus(), 10);
    }, [focusSearchBar, disabled]);

    const handleChange = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
        setQueryString(query);
    };

    const handleClear = () => setQueryString('');

    return (
        <IonSearchbar
            mode="ios"
            placeholder={placeholder}
            debounce={1000}
            onIonChange={(ev) => handleChange(ev)}
            onIonClear={(ev) => handleClear()}
            disabled={disabled}
            ref={searchbarRef}
            className="search-bar ion-no-padding"
            inputmode="search"
            enterkeyhint="enter"
        ></IonSearchbar>
    );
};

export default Search;
