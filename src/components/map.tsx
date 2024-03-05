import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import "./map.css";
import { tenant } from "../tenant/tenantService";
import { mapOutline } from "ionicons/icons";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
interface mapProps {}

const Map: React.FC<mapProps> = () => {
  return (
    <>
      <MapContainer
        style={{
          minHeight: "100%",
        }}
        center={[tenant.mapDetails.latitude, tenant.mapDetails.longitude]}
        zoom={tenant.mapDetails.zoom}
        //style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton
        //style={fabButtonStyles}
        //style={{ color: tenant.theme.secondaryColor }}
        >
          <IonIcon icon={mapOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default Map;
