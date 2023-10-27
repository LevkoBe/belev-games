// Profile.js
import React from "react";
import Settings from "./Settings";
import House from "./House";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "30%" }}>
        <Settings />
      </div>
      <div style={{ flex: "70%" }}>
        <House />
      </div>
    </div>
  );
};

export default Profile;
