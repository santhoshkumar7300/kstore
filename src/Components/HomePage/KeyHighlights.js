import Styles from "./KeyHighlights.module.css";
import deposite from "../../Assets/deposite.png";
import moneybag from "../../Assets/money-bag.png";
import minreq from "../../Assets/100.png";
import smile from "../../Assets/smile.png";
import lowprice from "../../Assets/low-price.png";
import delivery from "../../Assets/delivery.png";
import store from "../../Assets/store.png";
import stock from "../../Assets/stock.png";
import card from "../../Assets/card.png";
import presentation from "../../Assets/presentation.png";
import time from "../../Assets/24-7.png";
import homeapp from "../../Assets/home_app.png";
import { useState } from "react";
export default function KeyHighlights() {
  const [leftData, setLeftData] = useState([
    { img: deposite, description: "No caution deposit" },
    { img: moneybag, description: " No royalty fee collected" },
    { img: minreq, description: "Minimum requirement is 100 sq. Feet" },
    {
      img: smile,
      description:
        "Products are priced lesser than any online price, so the customers enjoy products at wholesale price.",
    },
    { img: lowprice, description: "Low investment set-up" },
    {
      img: delivery,
      description: "Free delivery to customer location throughout Tamilnadu.",
    },
  ]);

  const [rightData, setRightData] = useState([
    {
      img: store,
      description:
        "Mini format stores which provides infrastructure of large format store.",
    },
    { img: stock, description: "Minimal stock maintenance" },
    {
      img: card,
      description:
        "All Debit / Credit card, EMI and loan option available in all franchise stores.",
    },
    {
      img: presentation,
      description:
        "Online and offline training will be provided for franchise partners.",
    },
    { img: time, description: "24*7 Dealer care" },
  ]);

  return (
    <div id="highlights" className="mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-white fs-1 kstoreFont">
          Key <span className="orange">Highlights</span>{" "}
        </h1>
      </div>

      <div className={Styles.parentContainer + " container mt-5"}>
        <div className={Styles.content}>
          {leftData.map((e) => (
            <ul>
              <li>
                <div className="d-flex">
                  <div>
                    <img className={Styles.img} src={e.img} alt="bag" />
                  </div>
                  <div>
                    <span className="text-white">{e.description}</span>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
        <div className={Styles.content}>
          {rightData.map((e) => (
            <ul>
              <li>
                <div className="d-flex">
                  <div>
                    <img className={Styles.img} src={e.img} alt="bag" />
                  </div>
                  <div>
                    <span className="text-white">{e.description}</span>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div
        data-aos="fade"
        data-aos-once="true"
        className="d-flex justify-content-center mt-5"
      >
        <img className={Styles.homeImg} src={homeapp} alt="home" />
      </div>
    </div>
  );
}
