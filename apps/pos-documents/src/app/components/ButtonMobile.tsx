import { IonButton } from "@ionic/react"

interface ContainerProps {
    text: string
}

const ButtonMobile: React.FC<ContainerProps> = ({ text }) => {
    return <IonButton>{text} + Mobile</IonButton>
}

export default ButtonMobile
