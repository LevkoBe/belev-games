import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

import "./styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div style={{ width: "30px", cursor: "pointer" }}>
        <Link to="/">
          <Title scaleDown={0.5} />
        </Link>
      </div>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </nav>
  );
};

export default Navigation;
