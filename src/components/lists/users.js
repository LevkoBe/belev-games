import UserClass from "../../classes/UserClass";
import usersData from "./users.json";

const users = usersData.map((userData) => new UserClass(userData.name, userData.password, userData.email));

export default users;
