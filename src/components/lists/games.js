import GameClass from "../../classes/GameClass";

// image, title, description, playerNumbers, category

const games = [
  new GameClass("https://res.cloudinary.com/dbkotg0js/image/upload/v1698400622/belev-games/chess2_n5uapy.png", "Leotop", "Description for Leotop", { from: 2, to: 4 }, "Domino"),
  new GameClass(
    "https://res.cloudinary.com/dbkotg0js/image/upload/v1698400622/belev-games/chess1_uobc0e.png",
    "Chess Snakes",
    "Description for Chess Snakes",
    { from: 2, to: 6 },
    "Chess"
  ),
  new GameClass(
    "https://res.cloudinary.com/dbkotg0js/image/upload/v1698400621/belev-games/chess3_eysvf9.png",
    "Invisible Chess",
    "Description for Invisible Chess",
    { from: 2, to: 4 },
    "Chess"
  ),
  new GameClass("https://res.cloudinary.com/dbkotg0js/image/upload/v1698400621/belev-games/chess3_eysvf9.png", "Go", "Description for Go", { from: 2, to: 2 }, "Other"),
  new GameClass("https://res.cloudinary.com/dbkotg0js/image/upload/v1698400621/belev-games/chess6_fwbiyw.png", "Castles", "Description for Castles", { from: 2, to: 4 }, "Card"),
  new GameClass("https://res.cloudinary.com/dbkotg0js/image/upload/v1698400621/belev-games/chess5_u7l3x1.png", "Pseudoku", "Description for Castles", { from: 2, to: 4 }, "Card"),
];

export default games;
