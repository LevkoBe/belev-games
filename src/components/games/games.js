import GameClass from "./GameClass";

// image, title, description, playerNumbers, category

const games = [
  new GameClass("game1.jpg", "Leotop", "Description for Leotop", { from: 2, to: 4 }, "Domino"),
  new GameClass("game2.jpg", "Chess Snakes", "Description for Chess Snakes", { from: 2, to: 6 }, "Chess"),
  new GameClass("game3.jpg", "Invisible Chess", "Description for Invisible Chess", { from: 2, to: 4 }, "Chess"),
  new GameClass("game4.jpg", "Go", "Description for Go", { from: 2, to: 2 }, "Other"),
  new GameClass("game5.jpg", "Castles", "Description for Castles", { from: 2, to: 4 }, "Card"),
];

export default games;
