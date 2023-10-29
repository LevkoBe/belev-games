import React from "react";
import "./styles/House.css";
import Title from "../Title";
import PersonalInfoSettings from "./settingsComponents/PersonalInfoSettings";
import PasswordsSettings from "./settingsComponents/PasswordsSettings";
import PreferencesSettings from "./settingsComponents/PreferencesSettings";
import NotificationsSettings from "./settingsComponents/NotificationsSettings";
import AchievementsSettings from "./settingsComponents/AchievementsSettings";
import MoreSettings from "./settingsComponents/MoreSettings";

const House = ({ activeSetting }) => {
  const displaySetting = () => {
    if (!activeSetting) {
      return null;
    }
    switch (activeSetting.field) {
      case "personalInfo":
        return <PersonalInfoSettings />;
      case "passwords":
        return <PasswordsSettings />;
      case "preferences":
        return <PreferencesSettings />;
      case "notifications":
        return <NotificationsSettings />;
      case "achievements":
        return <AchievementsSettings />;
      case "more":
        return <MoreSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="house-container">
      <Title title="House Component" />
      {displaySetting()}
    </div>
  );
};

export default House;
