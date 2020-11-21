import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Features />
    </div>
  );
};

export default Home;
