import React, { useState } from "react";
import "./styles/GameCell.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faHeart, faBan } from "@fortawesome/free-solid-svg-icons";
import GameCellExtended from "./GameCellExtended";

const GameCell = ({ game }) => {
  const [isExtendedVisible, setExtendedVisible] = useState(false);

  const toggleExtended = () => {
    setExtendedVisible(!isExtendedVisible);
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
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
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
    </>
  );
};

export default GameCell;
