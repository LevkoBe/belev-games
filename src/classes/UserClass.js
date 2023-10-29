import SettingsClass from "./SettingsClass";

class UserClass {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.rooms = [];
    this.settings = new SettingsClass();
  }
}
export default UserClass;
