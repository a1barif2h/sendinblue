import React from "react";
import Customers from "./Customers/Customers";
import FeaturesHeader from "./FeaturesHeader";

const Features = () => {
  return (
    <div style={{ backgroundColor: "#F1F0EF", paddingTop: "80px" }}>
      <FeaturesHeader />
      <Customers />
    </div>
  );
};

export default Features;
