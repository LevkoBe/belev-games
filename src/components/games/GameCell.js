import React from "react";

const GameCell = ({ game }) => {
  return (
    <div>
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <button>Add</button>
      <button>Delete</button>
      <button>Favorite</button>
      <button>Block</button>
    </div>
  );
};

export default GameCell;
