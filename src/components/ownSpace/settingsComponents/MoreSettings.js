import React from "react";
import "./settingsCommon.css";

const MoreSettings = ({ settings, handleSettingsChange }) => {
  return (
    <div className="settings-container">
      <div className="settings">
        <label className="settings" htmlFor="darkMode">
          Dark Mode:
        </label>
        {/* <input className="settings" type="checkbox" id="darkMode" checked={settings.more.darkMode} onChange={(e) => handleSettingsChange("more.darkMode", e.target.checked)} /> */}
      </div>
    </div>
  );
};

export default MoreSettings;
