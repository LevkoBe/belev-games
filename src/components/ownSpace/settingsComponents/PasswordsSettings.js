import React, { useState } from "react";
import "./settingsCommon.css";
import LocalStorageService from "../../LocalStorageService";
import cloneDeep from "lodash/cloneDeep";

const PasswordsSettings = () => {
  const user = LocalStorageService.getCurrentUser();
  const [newPassword, setNewPassword] = useState(user.settings.passwords.newPassword);
  const [confirmPassword, setConfirmPassword] = useState(user.settings.passwords.confirmPassword);
  const [currentPassword, setCurrentPassword] = useState("");
  const [validationError, setValidationError] = useState(null);

  const handlePasswordChange = () => {
    if (currentPassword !== user.password) {
      setValidationError("Current password is incorrect.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setValidationError("New password and confirm password do not match.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
    if (!passwordRegex.test(newPassword)) {
      setValidationError("Password must contain at least one letter, one number, and one special symbol.");
      return;
    }

    const updatedUser = cloneDeep(user);
    updatedUser.password = newPassword;
    updatedUser.settings.passwords.currentPassword = newPassword;

    LocalStorageService.setCurrentUser(updatedUser);
    const allUsers = LocalStorageService.getAllUsers();
    const updatedAllUsers = allUsers.map((us) => (us.name === user.name ? updatedUser : us));
    LocalStorageService.saveAllUsers(updatedAllUsers);

    setValidationError(null);
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");
  };

  return (
    <div className="settings">
      {validationError && <div className="error">{validationError}</div>}
      <div className="settings">
        <label className="settings" htmlFor="currentPassword">
          Current Password:
        </label>
        <input className="settings" type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      </div>
      <div className="settings">
        <label className="settings" htmlFor="newPassword">
          New Password:
        </label>
        <input className="settings" type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div className="settings">
        <label className="settings" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input className="settings" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button onClick={handlePasswordChange}>Submit Changes</button>
    </div>
  );
};

export default PasswordsSettings;
