import React from "react";
import "./styles/Title.css";
import logo from "../BeLev Games.png";

const Title = ({ title = "", scaleDown = 1, onTitleClick = null }) => {
  const imageStyle = {
    width: `${100 * scaleDown}px`,
    height: `${100 * scaleDown}px`,
  };
  if (onTitleClick != null) {
    imageStyle.cursor = "pointer";
  }

  // Remove the () after handleClick
  function handleClick() {
    if (onTitleClick != null) {
      onTitleClick(null); // no category
    }
  }

  return (
    <div className="title-container" onClick={handleClick}>
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
