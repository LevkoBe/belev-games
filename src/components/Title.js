import React from "react";
import "./styles/Title.css";
import logo from "../BeLev Games.png";

const Title = ({ title = "", scaleDown = 1 }) => {
  const imageStyle = {
    width: `${100 * scaleDown}px`,
    height: `${100 * scaleDown}px`,
  };

  return (
    <div className="title-container">
      <div className="title-box">
        <img src={logo} alt="Belev Games Logo" className="title-image" style={imageStyle} />
        {title && (
          <h1 className="title-text" style={{ color: "#153009" }}>
            {title}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Title;
