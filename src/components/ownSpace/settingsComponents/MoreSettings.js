import React from "react";
import "../styles/MoreSettings.css";

const MoreSettings = ({ settings, handleSettingsChange }) => {
  return (
    <div className="more-settings">
      <h2>More</h2>
      <div>
        <label htmlFor="darkMode">Dark Mode:</label>
        <input type="checkbox" id="darkMode" checked={settings.more.darkMode} onChange={(e) => handleSettingsChange("more.darkMode", e.target.checked)} />
      </div>
    </div>
  );
};

export default MoreSettings;
