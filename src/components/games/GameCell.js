import React from "react";
import "../styles/GameCell.css";

const GameCell = ({ game }) => {
  return (
    <div className="game-cell">
      <div className="game-details">
        <h3 style={{ color: "#153009" }}>{game.title}</h3>
        {console.log(game.image)}
        <img src={game.image} alt={game.title} />
        <p className="description">{game.description}</p>
      </div>
      <div className="game-buttons">
        <button>Add</button>
        <button>Delete</button>
        <button>Favorite</button>
        <button>Block</button>
      </div>
    </div>
  );
};

export default GameCell;
