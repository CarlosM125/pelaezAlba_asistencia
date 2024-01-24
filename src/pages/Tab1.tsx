import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonCol,
} from "@ionic/react";

import Login from "../components/login/login";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">DESARROLLO MOVIL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        color="light"
        className="ion-padding ion-text-center"
      >
        <IonCard className="ion-align-items-center ion-justify-content-center">
          <IonCardContent>
            <IonCol className="ion-text-center">
              <IonAvatar style={{ width: "100%", height: "auto" }}>
                <img src="src/components/assets/avatarLogo.png" alt="Imagen" />
              </IonAvatar>
              <h1>Bienvenido</h1>
              <Login />
            </IonCol>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
