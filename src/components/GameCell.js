import React, { useState } from "react";
import "./styles/GameCell.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faHeart, faBan, faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import GameCellExtended from "./GameCellExtended";
import LocalStorageService from "./LocalStorageService";
import RegistrationForm from "./ownSpace/RegistrationForm";

const GameCell = ({ game }) => {
  const [isExtendedVisible, setExtendedVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isGameSaved, setIsGameSaved] = useState(LocalStorageService.getCurrentUser()?.rooms.some((room) => room.games.some((savedGame) => savedGame.title === game.title)));

  const currentUser = LocalStorageService.getCurrentUser();

  const toggleExtended = () => {
    setExtendedVisible(!isExtendedVisible);
  };

  const handleGameToggle = (e) => {
    e.stopPropagation();
    if (!currentUser) {
      setShowForm(true);
      return;
    }

    if (isGameSaved) {
      currentUser.rooms.forEach((room) => {
        room.games = room.games.filter((savedGame) => savedGame.title !== game.title);
      });
    } else {
      currentUser.rooms[0].games.push(game);
    }

    setIsGameSaved(!isGameSaved);
    LocalStorageService.setCurrentUser(currentUser);
    const allUsers = LocalStorageService.getAllUsers();
    const updatedAllUsers = allUsers.map((us) => (us.name === currentUser.name ? currentUser : us));
    LocalStorageService.saveAllUsers(updatedAllUsers);
  };

  return (
    <>
      <div className="game-cell" onClick={toggleExtended}>
        <div className="game-details">
          <h3 style={{ color: "#153009" }}>{game.title}</h3>
          <img src={game.image} alt={game.title} />
          <p className="description">{game.description}</p>
        </div>
        <div className="game-buttons">
          {isGameSaved ? <FontAwesomeIcon icon={faDotCircle} style={{ color: "#153009" }} /> : <FontAwesomeIcon icon={faCircle} style={{ color: "#153009" }} />}
          <button onClick={(e) => handleGameToggle(e)}>{isGameSaved ? <FontAwesomeIcon icon={faTrash} /> : <FontAwesomeIcon icon={faPlus} />}</button>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBan} />
          </button>
        </div>
      </div>
      {isExtendedVisible && (
        <GameCellExtended
          game={game}
          onClose={() => {
            setExtendedVisible(false);
          }}
        />
      )}
      {showForm && <RegistrationForm />}
    </>
  );
};

export default GameCell;
