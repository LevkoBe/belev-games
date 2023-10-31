import React from "react";
import "./styles/House.css";
import Title from "../Title";

const House = ({ component }) => {
  return (
    <div className="house-container">
      <Title title="House Component" />
      {component}
    </div>
  );
};

export default House;
