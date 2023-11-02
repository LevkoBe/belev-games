import React, { useState } from "react";
import "./styles/Rooms.css";

const Rooms = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="rooms" onClick={toggleVisibility}>
      <h2>Rooms</h2>
      <div className={`user-rooms ${isVisible ? "" : "content-hidden"}`}>
        <h3>{user.name}'s Rooms</h3>
        <ul>
          {user.rooms.map((room, roomIndex) => (
            <li key={roomIndex}>{room.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rooms;
