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

    let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, input");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = font;
    }
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
