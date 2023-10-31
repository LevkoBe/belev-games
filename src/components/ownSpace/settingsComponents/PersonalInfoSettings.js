import React, { useState } from "react";
import "./settingsCommon.css";
import LocalStorageService from "../../LocalStorageService";

const PersonalInfoSettings = () => {
  const currentUser = LocalStorageService.getCurrentUser();
  const [personalInfoSettings, setPersonalInfoSettings] = useState(currentUser.settings.personalInfo);

  const handleFirstNameChange = (e) => {
    const updatedPersonalInfo = { ...personalInfoSettings, firstName: e.target.value };
    setPersonalInfoSettings(updatedPersonalInfo);
  };

  const handleLastNameChange = (e) => {
    const updatedPersonalInfo = { ...personalInfoSettings, lastName: e.target.value };
    setPersonalInfoSettings(updatedPersonalInfo);
  };

  const handleBirthDateChange = (e) => {
    const updatedPersonalInfo = { ...personalInfoSettings, birthDate: e.target.value };
    setPersonalInfoSettings(updatedPersonalInfo);
  };

  const handleSaveChanges = () => {
    const updatedUser = { ...currentUser };
    updatedUser.settings.personalInfo = personalInfoSettings;

    const allUsers = LocalStorageService.getAllUsers();
    const updatedAllUsers = allUsers.map((user) => (user.name === currentUser.name ? updatedUser : user));
    LocalStorageService.saveAllUsers(updatedAllUsers);
  };

  return (
    <div className="settings">
      <h2 className="settings">Personal Info</h2>
      <div className="settings">
        <label className="settings" htmlFor="firstName">
          First Name:
        </label>
        <input className="settings" type="text" id="firstName" value={personalInfoSettings.firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        <label className="settings" htmlFor="lastName">
          Last Name:
        </label>
        <input className="settings" type="text" id="lastName" value={personalInfoSettings.lastName} onChange={handleLastNameChange} />
      </div>
      <div className="settings">
        <label className="settings" htmlFor="birthDate">
          Birth Date:
        </label>
        <input className="settings" type="date" id="birthDate" value={personalInfoSettings.birthDate} onChange={handleBirthDateChange} />
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default PersonalInfoSettings;
