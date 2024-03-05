import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Map from "../components/map";
import "./Home.css";
import { tenant } from "../tenant/tenantService";
import "leaflet/dist/leaflet.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          color={tenant.theme.primaryColor}
          style={{ backgroundColor: tenant.theme.primaryColor }}
        >
          <IonTitle style={{ color: tenant.theme.headerTextColor }}>
            {tenant.appBarTitle}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Map />
      </IonContent>
    </IonPage>
  );
};

export default Home;
