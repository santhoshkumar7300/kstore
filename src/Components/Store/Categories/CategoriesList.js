import Styles from "./CategoriesList.module.css";
import img from "../../../Assets/categoriesListImg.svg";
export default function CategoriesList() {
  return (
    <div className={Styles.overallContainer}>
      <div className={Styles.imgContainer}>
        <img className={Styles.img} src={img} alt="img" />
      </div>
      <div className="mt-3">
        <h4 className={Styles.details + " kstoreFont"}>
          boat Wireless Airdopes
        </h4>
        <h5 className={Styles.rate}>₹ 18,270.00</h5>
      </div>
    </div>
  );
}
