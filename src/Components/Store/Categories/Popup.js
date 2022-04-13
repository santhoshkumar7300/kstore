import Styles from "./Popup.module.css";
import save from "../../../Assets/save.svg";
import img from "../../../Assets/multipleSel.svg";
import del from "../../../Assets/wishlist_del.svg";
import { useState } from "react";
export default function Popup() {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <div className={Styles.overallPopupContainer}>
      <div className="d-flex justify-content-end">
        <div className={Styles.saveImgContainer}>
          <img className={Styles.saveImg} src={save} alt="save" />
        </div>
      </div>
      <div className={Styles.tableContainer}>
        <table className="mt-5">
          <thead>
            <tr className={Styles.heading}>
              <th className="text-center">Products</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {[...new Array(5)].map((e) => (
              <tr className={Styles.tr}>
                <td className={Styles.productContainer}>
                  <div className={Styles.imgContainer}>
                    <img className={Styles.img} src={img} alt="cart" />
                  </div>
                  <div className="align-self-center">
                    <p className={Styles.productDetails + " mb-0"}>
                      Havells Jio 1000-Watt Dry Iron
                    </p>
                  </div>
                </td>
                <td>
                  <input
                    className={Styles.productCount}
                    type="number"
                    defaultValue={1}
                    min="0"
                  />
                </td>
                <td className={Styles.td}>₹ 18,000.00</td>
                <td>
                  <img className={Styles.del} src={del} alt="del" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className={Styles.popupBill}>
          <span className={Styles.popupTitle}>Subtotal</span>
          <span className={Styles.popupTitle}>₹ 62,002.00</span>
        </div>
        <div className={Styles.popupBill}>
          <span className={Styles.popupTitle}>Product Discount (6%)</span>
          <span className={Styles.popupTitle}>₹ 1,282.00</span>
        </div>
        <div className={Styles.popupBill}>
          <span className={Styles.popupTitle}>Tax(10%)</span>
          <span className={Styles.popupTitle}>₹ 3,658.00</span>
        </div>
        <div className={Styles.border} />
        <div className={Styles.popupBill}>
          <span className={Styles.popupTitle + " orange"}>Tax(10%)</span>
          <span className={Styles.popupTitle + " orange"}>₹ 3,658.00</span>
        </div>
      </div>
      <div className={Styles.btnContainer + " mt-3"}>
        <button className={Styles.submitBtn}>Submit</button>
        <button className={Styles.cancelBtn}>Cancel</button>
      </div>
    </div>
  );
}
