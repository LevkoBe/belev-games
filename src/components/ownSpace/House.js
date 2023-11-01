import React from "react";
import "./styles/House.css";
import Title from "../Title";

const House = ({ component, title }) => {
  return (
    <div className="house-container">
      <Title title={title} />
      {component}
    </div>
  );
};

export default House;
