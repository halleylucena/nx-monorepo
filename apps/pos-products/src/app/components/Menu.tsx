import { IonCol, IonContent, IonGrid, IonMenu, IonRow } from '@ionic/react';

import './Menu.css';

const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <div className="menu-container">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12"></IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
