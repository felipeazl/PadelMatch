import React from "react";
import Logo from "../../images/Logo.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <img src={Logo} alt="Padel Match"></img>
    </div>
  );
};

export default Home;
