import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/GameCellExtended.css";

const GameCellExtended = ({ game, onClose }) => {
  const joke_1 =
    "Four engineers get into a car. The car won't start. The Mechanical engineer says 'It's a broken starter'. The Electrical engineer says 'Dead battery'. The Chemical engineer says 'Impurities in the gasoline'. The IT engineer says 'Hey guys, I have an idea: How about we all get out of the car and get back in'.";
  const [joke, setJoke] = useState(joke_1);

  useEffect(() => {
    try {
      axios.get("https://v2.jokeapi.dev/joke/Programming").then((response) => {
        const { joke } = response.data;
        setJoke(joke || joke_1);
      });
    } catch (error) {}
  }, []);

  return (
    <div className="game-cell-extended-container">
      <div className="game-cell-extended">
        <h3 style={{ color: "#153009" }}>{game.title}</h3>
        <img src={game.image} alt={game.title} />
        {joke && <p className="joke">{joke}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default GameCellExtended;
