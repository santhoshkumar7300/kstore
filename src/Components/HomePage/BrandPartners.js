import sumsung from "../../Assets/sumsung.jpg";
import lg from "../../Assets/lg.jpeg";
import Styles from "./BrandPartners.module.css";
import Carousel from "react-multi-carousel";

export default function BrandPartners() {
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
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-white kstoreFont">
          Brand <span className="orange kstoreFont">Partners</span>
        </h1>
      </div>
      {/* <div className="container d-flex justify-content-center mt-5">
        {[...new Array(2)].map((e) => (
          <div>
            <img className={Styles.imgContainer} src={sumsung} alt="sumsung" />
            <img className={Styles.lgImg} src={lg} alt="lg" />
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
          <div>
            <img className={Styles.imgContainer} src={sumsung} alt="sumsung" />
            {/* <img className={Styles.lgImg} src={lg} alt="lg" /> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
