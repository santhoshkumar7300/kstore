import gif from "../../Assets/kstore.gif";
import Styles from "./Header.module.css";
import upscroll from "../../Assets/upscroll.png";
import { toast } from "react-toastify";

export default function Header() {
  const scrollHandle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={Styles.test + " pt-4"}>
      <div>
        <div className={Styles.headerContainer + " container"}>
          <img className={Styles.log} src={gif} alt="gif" />
        </div>
        <div className={Styles.menuBtn + " container-fluid"}>
          <div className={Styles.menuAnimi}>
            <div className={Styles.menuAnimiChild}></div>
            <div className={Styles.menuAnimiChild}></div>
            <div className={Styles.menuAnimiChild}></div>
          </div>
        </div>
      </div>

      <div>
        <button
          data-aos="fade"
          onClick={scrollHandle}
          className={Styles.upScrollContainer}
        >
          <img className={Styles.upscrollImg} src={upscroll} alt="scroll" />
        </button>
      </div>
    </div>
  );
}
