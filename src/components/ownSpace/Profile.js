import React, { useState } from "react";
import House from "./House";
import Navigation from "../Navigation";
import Account from "./Account";

const Profile = () => {
  const [activeSetting, setActiveSetting] = useState(null);
  return (
    <>
      <Navigation pathname="/profile" />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "30%" }}>
          <Account onSettingClick={setActiveSetting} activeSetting={activeSetting} />
        </div>
        <div style={{ flex: "70%" }}>
          <House activeSetting={activeSetting} />
        </div>
      </div>
    </>
  );
};

export default Profile;
