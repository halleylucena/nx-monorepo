import { IonCol, IonContent, IonGrid, IonMenu, IonRow } from "@ionic/react"

import "./Menu.css"
import Filter from "./Filter"

const Menu: React.FC = () => {

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <div className="menu-container">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12">
                                <Filter typesFiltered={[]} setTypesFiltered={[]}/>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonMenu>
    )
}

export default Menu
