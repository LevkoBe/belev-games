import React from "react";
import GameCell from "./games/GameCell";
import Title from "./Title";

const Shelf = ({ activeCategory }) => {
  if (activeCategory == null) {
    return <Title title="Select a category"></Title>;
  }
  return (
    <div>
      <div>
        <Title title={activeCategory.title} />
      </div>
      {activeCategory.games.map((game, index) => (
        <GameCell key={index} game={game}></GameCell>
      ))}
    </div>
  );
};

export default Shelf;
