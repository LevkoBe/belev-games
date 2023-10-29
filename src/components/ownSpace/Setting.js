import React from "react";

const Setting = ({ setting, onSettingClick }) => {
  return (
    <div className="setting-item" onClick={() => onSettingClick(setting)} style={{ cursor: "pointer" }}>
      <div className="setting-name">
        <h3>{setting.title}</h3>
      </div>
    </div>
  );
};

export default Setting;
