import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import JoinParty from "../JoinParty/JoinParty";
import Privacy from "../Privacy/Privacy";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Features />
      <Privacy />
      <JoinParty />
      <Footer />
    </div>
  );
};

export default Home;
