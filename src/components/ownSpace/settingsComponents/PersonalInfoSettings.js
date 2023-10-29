import React from "react";
import "../styles/PersonalInfoSettings.css";

const PersonalInfoSettings = ({ settings, handleSettingsChange }) => {
  return (
    <div className="personal-info-settings">
      <h2>Personal Info</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={settings.personalInfo.firstName} onChange={(e) => handleSettingsChange("personalInfo.firstName", e.target.value)} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={settings.personalInfo.lastName} onChange={(e) => handleSettingsChange("personalInfo.lastName", e.target.value)} />
      </div>
      <div>
        <label htmlFor="birthDate">Birth Date:</label>
        <input type="text" id="birthDate" value={settings.personalInfo.birthDate} onChange={(e) => handleSettingsChange("personalInfo.birthDate", e.target.value)} />
      </div>
    </div>
  );
};

export default PersonalInfoSettings;
