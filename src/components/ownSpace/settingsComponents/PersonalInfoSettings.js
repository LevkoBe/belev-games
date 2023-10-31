import React from "react";
import "./settingsCommon.css";
import LocalStorageService from "../../LocalStorageService";

const PersonalInfoSettings = ({ handleSettingsChange }) => {
  const settings = LocalStorageService.getCurrentUser().settings;
  return (
    <div className="settings">
      <h2 className="settings">Personal Info</h2>
      <div className="settings">
        <label className="settings" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="settings"
          type="text"
          id="firstName"
          // value={settings.personalInfo.firstName}
          onChange={(e) => handleSettingsChange("personalInfo.firstName", e.target.value)}
        />
      </div>
      <div>
        <label className="settings" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="settings"
          type="text"
          id="lastName"
          // value={settings.personalInfo.lastName}
          onChange={(e) => handleSettingsChange("personalInfo.lastName", e.target.value)}
        />
      </div>
      <div className="settings">
        <label className="settings" htmlFor="birthDate">
          Birth Date:
        </label>
        <input
          className="settings"
          type="text"
          id="birthDate"
          // value={settings.personalInfo.birthDate}
          onChange={(e) => handleSettingsChange("personalInfo.birthDate", e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonalInfoSettings;
