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
    <IonPage className="header">
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#f6ceec" }}>
          <IonTitle className="ion-text-center">Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{ backgroundColor: "blue" }}
      >
        <IonCard style={{ backgroundColor: "#f6ceec" }}>
          <IonCardHeader className="header">
            <IonCardTitle style={{ color: "black" }}>Registro</IonCardTitle>
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
