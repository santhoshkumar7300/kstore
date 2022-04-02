import Styles from "./About.module.css";
import leftImg from "../../Assets/about.png";
// import flowImg from "../../Assets/kstore-flow.svg";

export default function About() {
  return (
    <div className={Styles.test}>
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="text-white kstoreFont">
            About <span className="orange kstoreFont">KSTORe?</span>
          </h1>
        </div>
        <div className="container d-flex mt-5">
          <div className="w-50">
            <img className={Styles.img} src={leftImg} alt="img" />
          </div>
          <div className="w-50 mt-5">
            <p className="text-white text-start fs-6">
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
            <p className="text-white text-start fs-6">
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
      <div></div>
    </div>
  );
}
