import { Link } from "react-router-dom";
import testmonials from "../../Assets/testimonial.jpg";
import Styles from "./Testimonials.module.css";

export default function Testmonials() {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-white kstoreFont">
          Client <span className="orange">Testimonials</span>
        </h1>
      </div>
      <div
        className={
          Styles.mapContainer +
          " container d-flex justify-content-center flex-wrap"
        }
      >
        {[...new Array(5)].map((e) => (
          <div className={Styles.imgContainer}>
            <img className={Styles.img} src={testmonials} alt="img" />
            <h5 className="mt-3">Our dealer feedback</h5>
            <p>Lorem Ipsum has been the industry's standard dummy text ever.</p>
            {/* <Link>Readmore...</Link> */}
            <h4>Readmore...</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
