import React from "react";
import About from "./About";

import Header from "./Header";
import Styles from "./Home.module.css";
import KeyHighlights from "./KeyHighlights";
import Map from "./Map";
import StoreLocator from "./StoreLocator";

function Home() {
  return (
    <div className={Styles.overallContainer + " container-fluid"}>
      <Header />
      <Map />
      <About />
      <KeyHighlights />
      <StoreLocator />
    </div>
  );
}

export default Home;
