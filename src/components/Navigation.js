import React from "react";
import Title from "./Title";
import "./styles/Navigation.css";

const Navigation = () => {
  return (
    // onTitleClick = {homepage}
    <nav className="navbar">
      <div style={{ width: "30px", cursor: "pointer" }}>
        <Title scaleDown={0.5} />
      </div>
      <button>Games</button>
      <button>About</button>
    </nav>
  );
};

export default Navigation;
