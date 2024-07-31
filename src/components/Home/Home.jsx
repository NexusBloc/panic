import React from "react";
import "./home.css";


import Navbar from "./NavBar/NavBar";
import MainPage from "./MainPage/MainPage";


const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="heroSection">
        <a href="#" className="navbar-logo">
          ?an!c
        </a>
      </div>
      <div className="mainPage">
      <MainPage />
      </div>
    </div>
  );
};

export default Home;
