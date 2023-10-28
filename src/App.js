import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Make sure to import Switch and Route from react-router-dom
import "./components/styles/App.css";
import Store from "./components/Store";
import Profile from "./components/ownSpace/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Store />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
