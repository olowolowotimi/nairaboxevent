import React from "react";
import Brandslide from "../Brandslide";
import brandStyle from "./styles/Brand.module.css";

const Brands = () => {
  return (
    <div className={brandStyle.brands}>
      <h2>Few of the Brands that Engage with Us</h2>
      <Brandslide />
    </div>
  );
};

export default Brands;
