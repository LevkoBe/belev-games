let existingUsers = [];

fetch("./components/users.json")
  .then((response) => response.json())
  .then((data) => {
    existingUsers = data;
  })
  .catch((error) => {
    console.error("Failed to load users.json", error);
  });

function getCurrentUser() {
  const username = localStorage.getItem("username");
  return existingUsers.find((user) => user.name === username);
}

function updateUserSettings(username, updatedSettings) {
  const user = existingUsers.find((user) => user.name === username);
  if (user) {
    user.settings = { ...user.settings, ...updatedSettings };
  }
}

export { getCurrentUser, updateUserSettings };
