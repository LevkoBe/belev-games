import React from "react";
import "../styles/PasswordsSettings.css";

const PasswordsSettings = ({ user }) => {
  console.log(user);
  return (
    <div className="passwords-settings">
      <h2>Passwords</h2>
      <div>
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          value={user.settings.passwords.currentPassword}
          onChange={(e) => handleSettingsChange("passwords.currentPassword", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password:</label>
        <input type="password" id="newPassword" value={user.settings.passwords.newPassword} onChange={(e) => handleSettingsChange("passwords.newPassword", e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={user.settings.passwords.confirmPassword}
          onChange={(e) => handleSettingsChange("passwords.confirmPassword", e.target.value)}
        />
      </div>
    </div>
  );
};

export default PasswordsSettings;
