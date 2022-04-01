import gif from "../../Assets/kstore.gif";
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <div className={Styles.headerContainer + " container"}>
        <img className={Styles.log} src={gif} alt="gif" />
        <div>
          <div className={Styles.menuAnimi}>
            <div className={Styles.menuAnimiChild}></div>
            <div className={Styles.menuAnimiChild}></div>
            <div className={Styles.menuAnimiChild}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
