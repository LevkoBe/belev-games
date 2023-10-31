import React, { useState } from "react";
import House from "./House";
import Navigation from "../Navigation";
import Account from "./Account";
import PersonalInfoSettings from "./settingsComponents/PersonalInfoSettings";
import PasswordsSettings from "./settingsComponents/PasswordsSettings";
import PreferencesSettings from "./settingsComponents/PreferencesSettings";
import NotificationsSettings from "./settingsComponents/NotificationsSettings";
import MoreSettings from "./settingsComponents/MoreSettings";
import AchievementsSettings from "./settingsComponents/AchievementsSettings";

const Profile = () => {
  const [currentSettingComponent, setComp] = useState(null);

  const handleSettingChoose = (selectedSetting) => {
    switch (selectedSetting) {
      case "Personal Info":
        setComp(<PersonalInfoSettings />);
        break;
      case "Passwords":
        setComp(<PasswordsSettings />);
        break;
      case "Preferences":
        setComp(<PreferencesSettings />);
        break;
      case "Notifications":
        setComp(<NotificationsSettings />);
        break;
      case "More (Mode: Dark/Light)":
        setComp(<MoreSettings />);
        break;
      case "Achievements":
        setComp(<AchievementsSettings />);
        break;
      default:
        setComp(null);
        break;
    }
  };

  return (
    <>
      <Navigation pathname="/profile" />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "30%" }}>
          <Account onSettingChoose={handleSettingChoose} />
        </div>
        <div style={{ flex: "70%" }}>
          <House component={currentSettingComponent} />
        </div>
      </div>
    </>
  );
};

export default Profile;
