import React from "react";
import pic1 from "../../../images/pic1.png";

const FeaturesHeader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={pic1} alt="" />
      <h2 style={{ fontSize: "50px", lineHeight: "50px", color: "#091e3f" }}>
        All the tools you need…
      </h2>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "28px",
          color: "#606469",
          marginTop: "10px",
        }}
      >
        and maybe a few you didn’t know you needed
      </p>
    </div>
  );
};

export default FeaturesHeader;
