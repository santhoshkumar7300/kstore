import React from "react";
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

function Home() {
  return (
    <div className={Styles.overallContainer + " container-fluid"}>
      <Header />
      <Map />
      <About />
      <KeyHighlights />
      <StoreLocator />
      <FranchiseEnquiry />
      <Testmonials />
      <BrandPartners />
      <ContactUs />
    </div>
  );
}

export default Home;
