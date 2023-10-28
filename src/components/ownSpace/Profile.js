// Profile.js
import React from "react";
import Settings from "./Settings";
import House from "./House";
import Navigation from "../Navigation";

const Profile = () => {
  return (
    <>
      <Navigation pathname="/profile" />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "30%" }}>
          <Settings />
        </div>
        <div style={{ flex: "70%" }}>
          <House />
        </div>
      </div>
    </>
  );
};

export default Profile;
