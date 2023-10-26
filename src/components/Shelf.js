import React from "react";
import GameCell from "./games/GameCell";
import Title from "./Title";

const Shelf = ({ activeCategory }) => {
  return (
    <div>
      <Title title={activeCategory.title}></Title>
      {activeCategory.games.map((game, index) => (
        <GameCell key={index} game={game}></GameCell>
      ))}
    </div>
  );
};

export default Shelf;
