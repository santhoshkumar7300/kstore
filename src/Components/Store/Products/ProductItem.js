import Styles from "./ProductItem.module.css";
import ProductImg from "../../../Assets/kstore_products.svg";
import eye from "../../../Assets/product_eye.svg";
import like from "../../../Assets/product_like.svg";
import share from "../../../Assets/product_share.svg";
import purchase from "../../../Assets/product_purchase.svg";

import { useState } from "react";
import ModalView from "./Modal";

export default function ProductItem() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className={Styles.overallContainer}>
      {isShowModal ? (
        <ModalView state={isShowModal} onHide={() => setIsShowModal(false)} />
      ) : null}

      <div className={Styles.offerContainer}>
        <span className={Styles.offer}>20%</span>
      </div>
      <div className={Styles.optionsParentContainer}>
        <div className={Styles.optionsContainer}>
          <img className={Styles.optionsImg} src={purchase} alt="purchase" />
        </div>
        <div className={Styles.optionsContainer}>
          <img className={Styles.optionsImg} src={like} alt="like" />
        </div>
        <div className={Styles.optionsContainer}>
          <img className={Styles.optionsImg} src={share} alt="share" />
        </div>
        <div className={Styles.optionsContainer}>
          <img className={Styles.optionsImg} src={eye} alt="eye" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <img
          className={Styles.productImg}
          onClick={() => setIsShowModal(!isShowModal)}
          src={ProductImg}
          alt="product"
        />
      </div>
      <div>
        <div className="d-flex justify-content-center mt-2">
          <p className={Styles.description}>
            Oppo A53s (Mist Blue, 64 GB) (6 GB RAM)
          </p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <span className={Styles.oldPrice}>₹ 17,000.00</span>
          <span className={Styles.newPrice + " orange"}>₹ 15,000.00</span>
        </div>
      </div>
    </div>
  );
}
