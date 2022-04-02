import Styles from "./Map.module.css";
import map from "../../Assets/map-01.png";

export default function Map() {
  return (
    <div className={Styles.test + " container d-flex mt-5"}>
      <div className="w-50 align-self-center text-start">
        <h1 className={Styles.leftheading}>
          New to Franchising |{" "}
          <span className={Styles.rightheading}>New to Business</span>{" "}
        </h1>
        <h1 className="text-white">
          Opening Your KSTOR <span className={Styles.rightheading}>e</span> is
          Easier Than You Think
        </h1>
        <p className="text-white">
          Learn what it takes to partner with our brand.
        </p>
        <button className={Styles.btn}>To become a franchise</button>
      </div>
      <div className="w-50">
        <img src={map} className="w-100" alt="map" />
      </div>
    </div>
  );
}
