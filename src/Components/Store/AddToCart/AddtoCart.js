import Styles from "./AddtoCart.module.css";
import cartImg from "../../../Assets/cartImg.svg";
import { useState } from "react";
export default function AddToCart() {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.bg}>
      <div className="container bg-white">
        <div className={Styles.tableParentContainer}>
          <div className={Styles.table + " d-flex justify-content-center"}>
            <table className="mt-5">
              <thead>
                <tr className={Styles.heading}>
                  <th className="text-center">Products</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {[...new Array(5)].map((e) => (
                  <tr className={Styles.tr}>
                    <td className={Styles.productContainer}>
                      <span className="align-self-center">1</span>
                      <div className={Styles.imgContainer}>
                        <img className={Styles.img} src={cartImg} alt="cart" />
                      </div>
                      <div className="align-self-center">
                        <p className={Styles.productDetails + " mb-0"}>
                          Oppo A53s (Mist Blue, 64 GB) (6 GB RAM)
                        </p>
                      </div>
                    </td>
                    <td className={Styles.td}>₹ 18,000.00</td>
                    <td>
                      <input
                        className={Styles.productCount}
                        type="number"
                        defaultValue={1}
                        min="0"
                        onChange={(e) => setCount(e.target.value)}
                      />
                    </td>
                    <td className={Styles.td + " orange"}>₹ 18,000.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={Styles.cartBtnContainer + " mt-3"}>
          <button className={Styles.clearCart}>Clear Cart</button>
          <button className={Styles.updateCart}>Update Cart</button>
        </div>
        <div className={Styles.totalContainer + " mt-5"}>
          <div className={Styles.mblCartotal}>
            <h4 className="kstoreFont">Cart Totals</h4>
            <hr className={Styles.hr} />
            <div className={Styles.totalDetailsContainer}>
              <div className="d-flex justify-content-between">
                <span className={Styles.font}>Sub Total : </span>
                <span className={Styles.font}>₹2500.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className={Styles.font}>Delivery : </span>
                <span className={Styles.font}>Free</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className={Styles.font}>Total : </span>
                <span className={Styles.font}>₹2500.00</span>
              </div>
            </div>
            <button className={Styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
