import React, { useEffect, useState } from "react";
import About from "./About";
import BrandPartners from "./BrandPartners";
import ContactUs from "./ContactUs";
import FranchiseEnquiry from "./FranchiseEnquiry";

import Header from "./Header";
import Styles from "./Home.module.css";
import KeyHighlights from "./KeyHighlights";
import Map from "./Map";
import StoreLocator from "./StoreLocator";
import Testmonials from "./Testimonials";
import AOS from "aos";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [isMenu, setIsMenu] = useState(null);

  const MenuEnable = (state) => {
    console.log(state, "====menuState");
    setIsMenu(state);
  };

  return (
    <div className={Styles.overallContainer + " container-fluid"}>
      <Header MenuEnable={MenuEnable} />
      <div style={{ opacity: isMenu ? "0" : "1" }}>
        <div data-aos="fade" data-aos-once="true">
          <Map />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <About />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <KeyHighlights />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <StoreLocator />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <FranchiseEnquiry />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <Testmonials />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <BrandPartners />
        </div>
        <div data-aos="fade" data-aos-once="true">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
