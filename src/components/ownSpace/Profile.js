// Profile.js
import React from "react";
import House from "./House";
import Navigation from "../Navigation";
import Account from "./Account";

const Profile = () => {
  return (
    <>
      <Navigation pathname="/profile" />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "30%" }}>
          <Account />
        </div>
        <div style={{ flex: "70%" }}>
          <House />
        </div>
      </div>
    </>
  );
};

export default Profile;
