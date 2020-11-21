import React from "react";
import CustomerJourney from "./CustomerJourney/CustomerJourney";
import Customers from "./Customers/Customers";
import FeaturesHeader from "./FeaturesHeader";
import VisitorsToCustomers from "./VisitorsToCustomers/VisitorsToCustomers";

const Features = () => {
  return (
    <div
      style={{
        backgroundColor: "#F1F0EF",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <FeaturesHeader />
      <Customers />
      <CustomerJourney />
      <VisitorsToCustomers />
    </div>
  );
};

export default Features;
