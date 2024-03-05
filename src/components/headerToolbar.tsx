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

const HeaderToolbar: React.FC = () => {
  /**
   * Grabs the users device current location on the map.
   * If device doesnt have location services, prompt to turn it on
   */
  const getCurrentLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    const lat = coordinates.coords.latitude;
    const long = coordinates.coords.longitude;
    const heading = coordinates.coords.heading;

    console.log(lat, long, heading);
  };
  return (
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
  );
};

export default HeaderToolbar;
