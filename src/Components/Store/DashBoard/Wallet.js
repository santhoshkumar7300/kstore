import Styles from "./Wallet.module.css";
import download from "../../../Assets/walletDownload.svg";
export default function Wallet() {
  return (
    <div className={Styles.overallContainer}>
      <div className="d-flex justify-content-between">
        <img className={Styles.img} src={download} alt="download" />
        <div className="w-25">
          <p className="mb-0 fw-bold">Top up</p>
          <p className={Styles.date}>26/03/2022</p>
        </div>
        <span className="align-self-center fw-bold">₹ 200.00</span>
        <span className={Styles.font + " text-success align-self-center"}>
          Completed
        </span>
      </div>
    </div>
  );
}
