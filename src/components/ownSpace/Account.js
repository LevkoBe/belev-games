import React from "react";
import AccountSettings from "./AccountSettings";
import Rooms from "./Rooms";
import users from "../lists/users";
import "./styles/Account.css";
import Title from "../Title";

const Account = ({ onSettingClick }) => {
  return (
    <div className="account-container">
      <Title title={"Profile"} />
      <hr />
      <AccountSettings user={users[0]} onSettingClick={onSettingClick} />
      <hr />
      <Rooms user={users[0]} />
      <hr />
    </div>
  );
};

export default Account;
