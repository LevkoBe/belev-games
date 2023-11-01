import React, { useState } from "react";
import UserClass from "../../classes/UserClass";
import "./styles/RegistrationForm.css";
import { useNavigate } from "react-router-dom";
import LocalStorageService from "../LocalStorageService";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const allUsers = LocalStorageService.getAllUsers();

  function setFonts(currentUser) {
    let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, input");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = currentUser.settings.preferences.fontFamily;
    }
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    if (isNewUser) {
      if (!name || !password || !confirmPassword || !email) {
        setErrorMessage("Please fill in all fields.");
      } else if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
      } else if (!isValidEmail(email)) {
        setErrorMessage("Invalid email address.");
      } else {
        const matchingUser = allUsers.find((user) => user.name === name);
        if (matchingUser) {
          setErrorMessage("Username already exists.");
        } else {
          const newUser = new UserClass(name, password, email);
          LocalStorageService.setCurrentUser(newUser);
          const updatedUsers = allUsers.concat(newUser);
          LocalStorageService.saveAllUsers(updatedUsers);

          setName("");
          setPassword("");
          setConfirmPassword("");
          setEmail("");
          setErrorMessage("");

          navigate("/profile");
        }
      }
    } else {
      if (!name || !password) {
        setErrorMessage("Please fill in all fields.");
      } else {
        const matchingUser = allUsers.find((user) => user.name === name && user.password === password);
        if (matchingUser) {
          LocalStorageService.setCurrentUser(matchingUser);
          setName("");
          setPassword("");
          setErrorMessage("");
          setFonts(matchingUser);
          navigate("/profile");
        } else {
          setErrorMessage("Invalid username or password.");
        }
      }
    }
  };

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setIsNewUser(!allUsers.some((user) => user.name === enteredName));
    setName(enteredName);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <div className="registration-container">
      <form className="registration-form">
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input type="text" id="name" className="registration-input" placeholder="Enter your name" value={name} onChange={handleNameChange} />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="registration-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {isNewUser && (
          <>
            <div className="input-container">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                className="registration-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="registration-input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </>
        )}
        <div className="buttons">
          <button>Cancel</button>

          <button className="registration-button" onClick={handleRegistration}>
            {isNewUser ? "Register" : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
