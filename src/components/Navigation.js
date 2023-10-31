import React from "react";
import Title from "./Title";
import RegistrationForm from "./ownSpace/RegistrationForm";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LocalStorageService from "./LocalStorageService";

import "./styles/Navigation.css";

const Navigation = () => {
  const currentUser = LocalStorageService.getCurrentUser();
  const { pathname } = useLocation();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const openRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  const handleSignOut = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      LocalStorageService.setCurrentUser(null);
      window.location.reload();
    }
  };

  return (
    <nav className="navbar">
      <div style={{ width: "50px" }}>
        <Link to="/">
          <Title scaleDown={0.5} />
        </Link>
      </div>
      {pathname !== "/profile" && !!currentUser && (
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      )}
      {pathname !== "/about" && (
        <Link to="/about">
          <button>About</button>
        </Link>
      )}
      {pathname !== "/profile" && !currentUser && <button onClick={openRegistrationForm}>Sign In</button>}
      {!!currentUser && <button onClick={handleSignOut}>Sign Out</button>}
      {showRegistrationForm && <RegistrationForm onClose={() => setShowRegistrationForm(false)} />}
    </nav>
  );
};

export default Navigation;
