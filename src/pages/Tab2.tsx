import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import Create from "./../components/create/create";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{ backgroundColor: "blue" }}
      >
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">Registro</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Create />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
