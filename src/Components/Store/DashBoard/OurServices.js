import Styles from "./OurServices.module.css";
import services from "../../../Assets/ourServices.svg";

export default function OurServices() {
  return (
    <div className={Styles.parentContainer}>
      <div className={Styles.bg}>
        <img className={Styles.img} src={services} alt="service" />
      </div>
      <p className={Styles.serviceDescription + " kstoreFont2"}>prepay</p>
    </div>
  );
}
