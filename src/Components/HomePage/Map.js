import Styles from "./Map.module.css";
import map from "../../Assets/map-01.png";

export default function Map() {
  return (
    <div className={Styles.test + " container d-flex "}>
      <div className="w-50 align-self-center text-start">
        <h1 className={Styles.leftheading}>
          New to Franchising |{" "}
          <span className={Styles.rightheading}>New to Business</span>{" "}
        </h1>
        <h1
          data-aos="fade-down"
          data-aos-once="true"
          className="text-white kstoreFont"
        >
          Opening Your KSTOR<span className={Styles.rightheading}>e</span> is
          Easier Than You Think
        </h1>
        <p className="text-white kstore2 fs-5">
          Learn what it takes to partner with our brand.
        </p>
        <button
          data-aos="fade-right"
          data-aos-once="true"
          className={Styles.btn}
        >
          To become a franchise
        </button>
      </div>
      <div className="w-50">
        <img src={map} className="w-100" alt="map" />
      </div>
    </div>
  );
}
