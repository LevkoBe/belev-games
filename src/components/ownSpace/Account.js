import React from "react";
import AccountSettings from "./AccountSettings";
import Rooms from "./Rooms";
import Title from "../Title";
import LocalStorageService from "../LocalStorageService";
import "./styles/Account.css";

const Account = ({ onSettingChoose }) => {
  const currentUser = LocalStorageService.getCurrentUser();

  return (
    <div className="account-container">
      <Title title={"Profile"} />
      <hr />
      <AccountSettings onSettingChoose={onSettingChoose} user={currentUser} />
      <hr />
      <Rooms user={currentUser} />
      <hr />
    </div>
  );
};

export default Account;
