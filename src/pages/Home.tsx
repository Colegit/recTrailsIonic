import {
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Map from "../components/map";
import "./Home.css";
import { tenant } from "../tenant/tenantService";
import "leaflet/dist/leaflet.css";
import HeaderToolbar from "../components/headerToolbar";
import SideMenu from "../components/sideMenu";

const Home: React.FC = () => {
  return (
    <>
      <SideMenu />
      <IonPage id="main-content">
        <IonHeader>
          <HeaderToolbar />
        </IonHeader>
        <IonContent>
          <Map />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
