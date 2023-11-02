class RoomSettings {
  constructor(fontFamily = "Libre Baskerville", color = "#000000", background = "#FFFFFF", fontSize = "16px") {
    this.fontFamily = fontFamily;
    this.color = color;
    this.background = background;
    this.fontSize = fontSize;
  }
}

class RoomClass {
  constructor(title = "Room", games = [], settings = new RoomSettings()) {
    this.title = title;
    this.games = games;
    this.settings = settings;
  }
}

export default RoomClass;
