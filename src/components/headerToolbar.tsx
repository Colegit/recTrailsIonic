import { IonButtons, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import { tenant } from "../tenant/tenantService";

const HeaderToolbar: React.FC = () => {
  return (
    <IonToolbar
      color={tenant.theme.primaryColor}
      style={{ backgroundColor: tenant.theme.primaryColor }}
    >
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonTitle style={{ color: tenant.theme.headerTextColor }}>
        {tenant.appBarTitle}
      </IonTitle>
    </IonToolbar>
  );
};

export default HeaderToolbar;
