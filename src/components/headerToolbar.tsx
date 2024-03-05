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

const HeaderToolbar: React.FC = () => {
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
        <IonButton>
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
