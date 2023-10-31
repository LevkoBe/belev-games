import React, { useState } from "react";
import "./styles/AccountSettings.css";

const AccountSettings = ({ user, onSettingChoose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleItemClick = (e) => {
    e.stopPropagation();
    const selectedItem = e.target.textContent;
    onSettingChoose(selectedItem);
  };

  return (
    <div className={`account-settings`} onClick={toggleVisibility}>
      <h2>Account settings</h2>
      <div className={`user-settings ${isVisible ? "" : "content-hidden"}`}>
        <ul>
          <li onClick={handleItemClick}>Personal Info</li>
          <li onClick={handleItemClick}>Passwords</li>
          <li onClick={handleItemClick}>Preferences</li>
          <li onClick={handleItemClick}>Notifications</li>
          <li onClick={handleItemClick}>More (Mode: Dark/Light)</li>
          <li onClick={handleItemClick}>Achievements</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountSettings;
