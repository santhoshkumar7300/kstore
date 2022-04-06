import Styles from "./Products.module.css";

export default function Products() {
  return (
    <div className={Styles.overallContainer}>
      <div className={Styles.leftContainer}>
        <div>
          <div>
            <h4>Categories</h4>
            <span className={Styles.clearall + " orange"}>Clear All</span>
          </div>
        </div>
      </div>
    </div>
  );
}
