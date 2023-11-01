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
  const [currentTitle, setTitle] = useState("Here you can set everything you want for your account!");

  const handleSettingChoose = (selectedSetting) => {
    switch (selectedSetting) {
      case "Personal Info":
        setComp(<PersonalInfoSettings />);
        setTitle("Personal Info");
        break;
      case "Passwords":
        setComp(<PasswordsSettings />);
        setTitle("Passwords");
        break;
      case "Preferences":
        setComp(<PreferencesSettings />);
        setTitle("Preferences");
        break;
      case "Notifications":
        setComp(<NotificationsSettings />);
        setTitle("Notifications");
        break;
      case "More (Mode: Dark/Light)":
        setComp(<MoreSettings />);
        setTitle("More (Mode etc)");
        break;
      case "Achievements":
        setComp(<AchievementsSettings />);
        setTitle("Achievements");
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
          <House component={currentSettingComponent} title={currentTitle} />
        </div>
      </div>
    </>
  );
};

export default Profile;
