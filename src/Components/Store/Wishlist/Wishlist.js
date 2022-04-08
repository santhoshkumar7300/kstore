import Styles from "./Wishlist.module.css";
import cartImg from "../../../Assets/cartImg.svg";
import del from "../../../Assets/wishlist_del.svg";
export default function Wishlist() {
  return (
    <div className={Styles.bg}>
      <div className="container bg-white">
        <div className="d-flex justify-content-center">
          <table className="mt-5">
            <thead>
              <tr className={Styles.heading}>
                <th className="text-center">Products</th>
                <th className="text-center">Describtion</th>
                <th className="text-center">Price</th>
                <th className="text-center">Stock Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...new Array(5)].map((e) => (
                <tr className={Styles.tr}>
                  <td className={Styles.productContainer}>
                    <div className={Styles.imgContainer}>
                      <img className={Styles.img} src={cartImg} alt="cart" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className={Styles.productDetails + " mb-0"}>
                        Oppo A53s (Mist Blue, 64 GB) (6 GB RAM)
                      </p>
                    </div>
                  </td>
                  <td>₹ 18,000.00</td>
                  <td>In Stock</td>
                  <td>
                    <button className={Styles.addtocartBtn}>Add to Cart</button>
                  </td>
                  <td>
                    <img className={Styles.del} src={del} alt="del" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
