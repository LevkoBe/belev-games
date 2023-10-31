import React, { useEffect, useState } from "react";
import "../styles/PopUp.css";

const PopUp = ({ achievement, duration, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return isVisible ? (
    <div className="popup">
      <h4>New achievement!</h4>
      <img src={achievement.image} alt={achievement.title} />
      <h4>{achievement.title}</h4>
    </div>
  ) : null;
};

export default PopUp;
