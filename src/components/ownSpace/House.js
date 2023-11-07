import React from "react";
import "./styles/House.css";
import Title from "../Title";
import Table from "./Table";

const House = ({ component, title }) => {
  return (
    <div className="house-container">
      <Title title={title} />
      {component || <Table rows={2} cols={2} />}
    </div>
  );
};

export default House;
