import React, { useEffect, useState } from "react";

const UserLoader = ({ setAllUsers }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("users.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setAllUsers(data);
      })
      .catch((error) => {
        console.error("Failed to load users.json", error);
      });
  }, [setAllUsers]);

  return null;
};

export default UserLoader;
