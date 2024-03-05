import { IonAlert } from "@ionic/react";
import "./map.css";
import "leaflet/dist/leaflet.css";
import { Dispatch, SetStateAction } from "react";
interface alertProps {
  /**
   * What you want the alert message to say in its title
   */
  alertHeader: string;
  /**
   * What you want the alert message to say in its description
   */
  alertMessage: string;
  /**
   * The useState hook that triggers the alert message to open
   */
  open: boolean;
  /**
   * Turn the passed in open useState hook to true or false from within the component
   */
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Component to alert user or provide them more information on a specific action they took
 */
const Alert: React.FC<alertProps> = (props) => {
  return (
    <>
      <IonAlert
        isOpen={props.open}
        header={props.alertHeader}
        message={props.alertMessage}
        buttons={[
          {
            text: "OK",
            role: "ok",
            handler: () => {
              props.setOpen(false);
            },
          },
        ]}
        onDidDismiss={() => {
          props.setOpen(false);
        }}
      ></IonAlert>
    </>
  );
};

export default Alert;
