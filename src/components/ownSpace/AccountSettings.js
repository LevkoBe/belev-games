import React, { useState } from "react";
import "./styles/AccountSettings.css";

const AccountSettings = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`account-settings`} onClick={toggleVisibility}>
      <h2>Account settings</h2>
      <div className={`user-settings ${isVisible ? "" : "content-hidden"}`}>
        <h3>{user.name}'s Settings</h3>
        <ul>
          <li>Personal Info</li>
          <li>Passwords</li>
          <li>Preferences</li>
          <li>Notifications</li>
          <li>More (Mode: Dark/Light)</li>
          <li>Achievements</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountSettings;
