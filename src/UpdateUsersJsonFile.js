import { writeFileSync } from "fs";

const writeUsersToFile = (users) => {
  try {
    const jsonData = JSON.stringify(users, null, 2);

    writeFileSync("./components/users.json", jsonData, "utf8");
  } catch (error) {
    console.error("Error writing users to file:", error);
  }
};

export default writeUsersToFile;
