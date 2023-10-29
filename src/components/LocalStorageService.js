const LocalStorageService = {
  getAllUsers: () => {
    const users = JSON.parse(localStorage.getItem("allUsers")) || [];
    return users;
  },

  saveAllUsers: (users) => {
    localStorage.setItem("allUsers", JSON.stringify(users));
  },

  getCurrentUser: () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return user;
  },

  setCurrentUser: (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  },

  clearCurrentUser: () => {
    localStorage.removeItem("currentUser");
  },
};

export default LocalStorageService;
