import SettingsClass from "./SettingsClass";
import RoomClass from "./RoomClass";

class UserClass {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.rooms = [new RoomClass("Default room")];
    this.settings = new SettingsClass();
  }
}

export default UserClass;
