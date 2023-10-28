import React from "react";
import Title from "./Title";
import RegistrationForm from "./ownSpace/RegistrationForm";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import "./styles/Navigation.css";

const Navigation = () => {
  const { pathname } = useLocation();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const openRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  return (
    <nav className="navbar">
      <div style={{ width: "50px" }}>
        <Link to="/">
          <Title scaleDown={0.5} />
        </Link>
      </div>
      {pathname !== "/profile" && (
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      )}
      {pathname !== "/about" && (
        <Link to="/about">
          <button>About</button>
        </Link>
      )}
      <button onClick={openRegistrationForm}>Sign In</button>
      {showRegistrationForm && <RegistrationForm onClose={() => setShowRegistrationForm(false)} />}
    </nav>
  );
};

export default Navigation;
