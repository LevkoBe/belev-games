import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/styles/App.css";
import Store from "./components/Store";
import Profile from "./components/ownSpace/Profile";
import LocalStorageService from "./components/LocalStorageService";
import About from "./About";

function App() {
  const currentUser = LocalStorageService.getCurrentUser();

  useEffect(() => {
    let fontFamily = "Libre Baskerville";
    if (!!currentUser) {
      fontFamily = currentUser.settings.preferences.fontFamily;
    }
    document.body.style.fontFamily = fontFamily;

    document.querySelectorAll("button").forEach((button) => {
      button.style.fontFamily = fontFamily;
    });
  }, [currentUser]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Store />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
