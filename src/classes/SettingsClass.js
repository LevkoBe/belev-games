class SettingsClass {
  constructor() {
    this.personalInfo = {
      firstName: "",
      lastName: "",
      birthDate: "",
    };

    this.passwords = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    this.preferences = {};

    this.notifications = {};

    this.more = {
      darkMode: false,
    };

    this.achievements = [];
  }
}

export default SettingsClass;
