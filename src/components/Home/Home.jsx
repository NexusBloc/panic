import React from "react";
import "./home.css";

import Navbar from "./NavBar/NavBar";
import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="containerFirst">
      <Navbar />
      <div className="heroSection">
        <a href="." className="navbar-logo">
          ?an!c
        </a>
      </div>
      <div className="mainPage">
        <MainPage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
