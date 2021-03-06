import Styles from "./About.module.css";
import leftImg from "../../Assets/about.png";
import FlowImg from "../../Assets/kstore_flow.png";
// import { ReactComponent as YourSvg } from "../../Assets/kstore-flow.svg";

export default function About() {
  return (
    <div id="about" className={Styles.test + " container"}>
      <div data-aos="fade">
        <div className="d-flex justify-content-center">
          <h1 className="text-white kstoreFont">
            About <span className="orange kstoreFont">KSTORe?</span>
          </h1>
        </div>
        <div className={Styles.ParentContainer + " container mt-5"}>
          <div className={Styles.content}>
            <img className={Styles.img} src={leftImg} alt="img" />
          </div>
          <div className={Styles.content + " mt-5"}>
            <p
              className={
                Styles.para + " text-white text-justify fs-6 kstoreFont3"
              }
            >
              KANSAS - The One Big Wallet is a prosperous 5 years old digital
              payment concern serving b2b market enabling retailers to earn high
              ROI with low investment. The services offered are Prepay and DTH
              Recharges, Postpay, EB Bill Payment, Money Transfer, Fastag,
              Pancard, Traffic Fine Payment, Game and OTT Recharges, Ticket
              Booking, Insurance and Loan Payment, apply for new loan etc.,
              KANSAS is now adding another feather to its cap with its new
              venture “KSTORe”
            </p>
            <br />
            <p
              className={
                Styles.para + " text-white text-justify fs-6 kstoreFont3"
              }
            >
              KSTORe - Phygital store is a new generation idea combining
              ecommerce and physical store, creating enormous opportunities to
              earn with less investment. K-store is a franchise opportunity
              available across Tamilnadu for selling all kinds of Electronic
              Appliances, Mobiles and Mobile Accessories, Television, Air
              Conditioner, Computer and Computer peripherals and Laptops.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <img
          data-aos="fade"
          src={FlowImg}
          className={Styles.flowImg}
          alt="img"
        />
      </div>
    </div>
  );
}
