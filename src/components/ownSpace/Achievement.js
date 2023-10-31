import React from "react";
import "./styles/Achievement.css";

const Achievement = ({ title, image, description }) => {
  return (
    <div className="achievement">
      <div className="achievement-image">
        <img src={image} alt={title} />
      </div>
      <div className="achievement-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Achievement;
