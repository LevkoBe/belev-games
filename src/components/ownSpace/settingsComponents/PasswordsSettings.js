import React from "react";
import "./settingsCommon.css";
import LocalStorageService from "../../LocalStorageService";

const PasswordsSettings = () => {
  const user = LocalStorageService.getCurrentUser();
  console.log(user);
  return (
    <div className="settings">
      <h2 className="settings">Passwords</h2>
      <div className="settings">
        <label className="settings" htmlFor="currentPassword">
          Current Password:
        </label>
        <input
          className="settings"
          type="password"
          id="currentPassword"
          value={user.settings.passwords.currentPassword}
          // onChange={(e) => handleSettingsChange("passwords.currentPassword", e.target.value)}
        />
      </div>
      <div className="settings">
        <label className="settings" htmlFor="newPassword">
          New Password:
        </label>
        <input
          className="settings"
          type="password"
          id="newPassword"
          value={user.settings.passwords.newPassword}
          // onChange={(e) => handleSettingsChange("passwords.newPassword", e.target.value)}
        />
      </div>
      <div className="settings">
        <label className="settings" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input
          className="settings"
          type="password"
          id="confirmPassword"
          value={user.settings.passwords.confirmPassword}
          // onChange={(e) => handleSettingsChange("passwords.confirmPassword", e.target.value)}
        />
      </div>
    </div>
  );
};

export default PasswordsSettings;
