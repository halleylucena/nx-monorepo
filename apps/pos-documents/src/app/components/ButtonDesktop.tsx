import { IonButton } from '@ionic/react';

interface ContainerProps {
  text: string;
}

const ButtonDesktop: React.FC<ContainerProps> = ({ text }) => {
  return <IonButton>{text}</IonButton>;
};

export default ButtonDesktop;
