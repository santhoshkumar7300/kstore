import { useState } from "react";
import Styles from "./StoreLocator.module.css";
import Carousel from "react-multi-carousel";
export default function StoreLocator() {
  const [pincode, setPincode] = useState(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={Styles.parentContainer}>
      <div className="d-flex justify-content-center">
        <h1 className="text-white kstoreFont">
          Store <span className="orange"> Locator</span>
        </h1>
      </div>

      <div className={Styles.inputContainer}>
        <p className="text-white m-0 text-center">Search</p>
        <input
          className={Styles.input}
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter Pincode"
        />
      </div>

      {/* <div className="container d-flex justify-content-center">
        {[...new Array(4)].map((e) => (
          <div className={Styles.shopListContainer}>
            <div className={Styles.shopList}>
              <h1 className="fs-5 text-white">South Indian</h1>
              <p>11,LIC Colony, Selvapuram, Coimbatore-641-026</p>
              <p>M: +91 7894561230</p>
              <p className="mb-0">E: southindian@kstore.in</p>
            </div>
          </div>
        ))}
      </div> */}
      <Carousel
        autoPlay
        autoPlaySpeed={1000}
        arrows={false}
        infinite={true}
        responsive={responsive}
        className="container"
      >
        {[...new Array(20)].map((e) => (
          <div className={Styles.shopListContainer}>
            <div className={Styles.shopList}>
              <h1 className="fs-5 text-white">South Indian</h1>
              <p>11,LIC Colony, Selvapuram, Coimbatore-641-026</p>
              <p>M: +91 7894561230</p>
              <p className="mb-0">E: southindian@kstore.in</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
