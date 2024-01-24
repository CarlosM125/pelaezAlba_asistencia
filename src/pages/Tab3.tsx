import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
} from "@ionic/react";
import Read from "./../components/read/read";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Desarrollo Móvil Ionic
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList style={{ backgroundColor: "#f6ceec" }}>
          <IonItem lines="none" className="ion-text-center">
            <h3>Usuarios registrados:</h3>
          </IonItem>
        </IonList>
        <Read />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
