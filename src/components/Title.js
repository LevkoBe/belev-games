import React from "react";
import "./Title.css";
import logo from "../BeLev Games.png";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <div className="title-box">
        <img src={logo} alt="Belev Games Logo" className="title-image" />
        <h1 className="title-text">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
