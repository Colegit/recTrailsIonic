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
import HeaderToolbar from "../components/headerToolbar";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <HeaderToolbar />
      </IonHeader>
      <IonContent>
        <Map />
      </IonContent>
    </IonPage>
  );
};

export default Home;
