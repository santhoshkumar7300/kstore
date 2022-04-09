import { Link } from "react-router-dom";
import testmonials from "../../Assets/testimonial.jpg";
import Styles from "./Testimonials.module.css";
import Carousel from "react-multi-carousel";

export default function Testmonials() {
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
    <div id="testimonial" className="mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-white kstoreFont">
          Client <span className="orange">Testimonials</span>
        </h1>
      </div>
      {/* <div
        className={
          Styles.mapContainer +
          " container d-flex justify-content-center flex-wrap"
        }
      >
        {[...new Array(4)].map((e) => (
          <div className={Styles.imgContainer}>
            <img className={Styles.img} src={testmonials} alt="img" />
            <h5 className="mt-3">Our dealer feedback</h5>
            <p>Lorem Ipsum has been the industry's standard dummy text ever.</p>

            <h4>Readmore...</h4>
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
          <div className={Styles.imgContainer}>
            <img className={Styles.img} src={testmonials} alt="img" />
            <h5 className="mt-3">Our dealer feedback</h5>
            <p>Lorem Ipsum has been the industry's standard dummy text ever.</p>
            {/* <Link>Readmore...</Link> */}
            <h4 className="orange fs-6">Readmore...</h4>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
}
