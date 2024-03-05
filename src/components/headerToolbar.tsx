import {
  IonButton,
  IonButtons,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { tenant } from "../tenant/tenantService";
import { personCircle, locateOutline } from "ionicons/icons";
import { Geolocation } from "@capacitor/geolocation";
import { useState } from "react";
import Alert from "./alert";

const HeaderToolbar: React.FC = () => {
  const [permissionAlertOpen, setPermissionAlertOpen] = useState(false);
  /**
   * Grabs the users device current location on the map.
   */
  const getCurrentLocation = async () => {
    const permissionCheck = await Geolocation.checkPermissions();

    if (permissionCheck.location !== "granted") {
      setPermissionAlertOpen(true);
    } else {
      const coordinates = await Geolocation.getCurrentPosition();

      const lat = coordinates.coords.latitude;
      const long = coordinates.coords.longitude;
      const heading = coordinates.coords.heading;

      console.log(lat, long, heading);
    }
  };
  return (
    <>
      <IonToolbar
        color={tenant.theme.primaryColor}
        style={{ backgroundColor: tenant.theme.primaryColor }}
      >
        <IonButtons slot="start">
          <IonMenuButton
            style={{ color: tenant.theme.headerTextColor }}
            autoHide={false}
          ></IonMenuButton>
        </IonButtons>

        <IonButtons slot="secondary">
          {/* <IonButton>
          <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
        </IonButton> */}
          <IonButton onClick={getCurrentLocation}>
            <IonIcon
              style={{ color: tenant.theme.headerTextColor }}
              slot="icon-only"
              icon={locateOutline}
            ></IonIcon>
          </IonButton>
        </IonButtons>

        <IonTitle style={{ color: tenant.theme.headerTextColor }}>
          {tenant.appBarTitle}
        </IonTitle>
      </IonToolbar>
      <Alert
        alertHeader={"Device Location Disabled"}
        alertMessage={
          "Turn on Location Services in your settings to use this feature"
        }
        open={permissionAlertOpen}
        setOpen={setPermissionAlertOpen}
      />
    </>
  );
};

export default HeaderToolbar;
