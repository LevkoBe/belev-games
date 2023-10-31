import React from "react";
import "./settingsCommon.css";
import Achievement from "../Achievement";
import LocalStorageService from "../../LocalStorageService";

const AchievementsSettings = () => {
  const achievements = LocalStorageService.getCurrentUser().settings.achievements;

  return (
    <div className="settings">
      <h2 className="settings">Achievements</h2>
      {achievements.map((achievement, index) => (
        <Achievement key={index} title={achievement.title} image={achievement.image} description={achievement.description} />
      ))}
    </div>
  );
};

export default AchievementsSettings;
