import sumsung from "../../Assets/sumsung.jpg";
import lg from "../../Assets/lg.jpeg";
import Styles from "./BrandPartners.module.css";

export default function BrandPartners() {
  return (
    <div className="container d-flex justify-content-center mt-5 ">
      {[...new Array(2)].map((e) => (
        <div>
          <img className={Styles.imgContainer} src={sumsung} alt="sumsung" />
          <img className={Styles.lgImg} src={lg} alt="lg" />
        </div>
      ))}
    </div>
  );
}
