import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./map.css";
import "leaflet/dist/leaflet.css";
import { Dispatch, SetStateAction } from "react";
import { tenant } from "../tenant/tenantService";
import { addCircleOutline, star, bug, map } from "ionicons/icons";

/**
 * Side menu that opens when user clicks on the hamburger
 */
const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList lines="full">
          {/* Once pages are added, users will need a way to nav back to the main map. Show this conditionally if they not on the main map page */}
          {/* <IonItem>
            <IonButton expand="full" fill="clear">
              <IonIcon icon={map} slot="start" />
              Map
            </IonButton>
          </IonItem> */}
          <IonItem>
            <IonButton expand="full" fill="clear">
              <IonIcon icon={addCircleOutline} slot="start" />
              Add Missing Trails
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" fill="clear">
              <IonIcon icon={star} slot="start" />
              Give Feedback
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" fill="clear">
              <IonIcon icon={bug} slot="start" />
              Report a Bug
            </IonButton>
          </IonItem>
          {/* Add more buttons as needed */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
