import React, { useState } from "react";
import "./styles/AccountSettings.css";
import settings from "../lists/settingsFields";
import Setting from "./Setting";

const AccountSettings = ({ user, onSettingClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`account-settings`}>
      <h2 onClick={toggleVisibility}>Account settings</h2>
      <div className={`user-settings ${isVisible ? "" : "content-hidden"}`}>
        <h3>{user.name}'s Settings</h3>
        <ul>
          {settings.map((setting, index) => (
            <Setting key={index} setting={setting} onSettingClick={onSettingClick} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountSettings;
