import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Pricing() {
  useEffect(() => {
    document.title = "Pricing";
  });

  return (
    <>
      <Header />
      <div className="product">
        <h2 className="exampleForRooting">
          Pricing Page
          <br /> Example for rooting
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
