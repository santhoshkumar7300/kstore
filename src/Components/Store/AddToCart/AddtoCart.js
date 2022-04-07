import Styles from "./AddtoCart.module.css";
import cartImg from "../../../Assets/cartImg.svg";

export default function AddToCart() {
  return (
    <div className={Styles.bg}>
      <div className={Styles.container + " container bg-white"}>
        <div>
          <table>
            <thead>
              <tr>
                <th className="text-center">Products</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {[...new Array(4)].map((e) => (
                <tr>
                  <td className={Styles.productContainer}>
                    <span className="align-self-center">1</span>
                    <div className={Styles.imgContainer}>
                      <img className={Styles.img} src={cartImg} alt="cart" />
                    </div>
                    <div className="align-self-center">
                      <p className="mb-0">
                        Oppo A53s (Mist Blue, 64 GB) (6 GB RAM)
                      </p>
                    </div>
                  </td>
                  <td>₹ 18,000.00</td>
                  <td>
                    <input
                      className={Styles.productCount}
                      type="number"
                      defaultValue={1}
                    />
                  </td>
                  <td className="orange">₹ 18,000.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
