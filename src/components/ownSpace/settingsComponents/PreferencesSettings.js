import React, { useState } from "react";
import "./settingsCommon.css";
import LocalStorageService from "../../LocalStorageService";

const PreferencesSettings = ({ settings, handleSettingsChange }) => {
  const [isFontListVisible, setIsFontListVisible] = useState(false);
  const [selectedFont, setSelectedFont] = useState("");

  const fonts = ["Arial, Helvetica, sans-serif", "Times New Roman, Times, serif", "Verdana, Geneva, sans-serif", "Libre Baskerville"];

  const handleFontSelection = (font) => {
    setSelectedFont(font);

    setIsFontListVisible(false);

    const currentUser = LocalStorageService.getCurrentUser();
    currentUser.settings.preferences.fontFamily = font;
    LocalStorageService.setCurrentUser(currentUser);

    const allUsers = LocalStorageService.getAllUsers();
    const updatedAllUsers = allUsers.map((us) => (us.name === currentUser.name ? currentUser : us));
    LocalStorageService.saveAllUsers(updatedAllUsers);

    let fontFamily = "Libre Baskerville";
    if (!!currentUser) {
      fontFamily = currentUser.settings.preferences.fontFamily;
    }
    document.body.style.fontFamily = fontFamily;
  };

  return (
    <div className="settings">
      <div className="settings">
        <h1 className="settings">Font</h1>
        <button onClick={() => setIsFontListVisible(!isFontListVisible)}>Choose Font</button>
        {isFontListVisible && (
          <ul className="font-list">
            {fonts.map((font) => (
              <li key={font} onClick={() => handleFontSelection(font)}>
                {font}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedFont && <p>Selected Font: {selectedFont}</p>}
    </div>
  );
};

export default PreferencesSettings;
