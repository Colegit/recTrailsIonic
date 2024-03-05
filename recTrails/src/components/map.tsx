import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import "./map.css";
import { tenant } from "../tenant/tenantService";
import { mapOutline } from "ionicons/icons";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
interface mapProps {}

const Map: React.FC<mapProps> = () => {
  return (
    <>
      <MapContainer
        style={{
          minHeight: "100%",
        }}
        center={[tenant.mapDetails.latitude, tenant.mapDetails.longitude]}
        zoom={13}
        //style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton color="secondary">
          <IonIcon icon={mapOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default Map;
