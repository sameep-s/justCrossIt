import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */



export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "ad@gmail.com",
    password: "a123",
    notes: [],
    archives: [],
    trash: [],
    labels: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },

  {
    _id: uuid(),
    firstName: "Sameep",
    lastName: "Sharma",
    email: "sam@gmail.com",
    password: "s123",
    notes: [],
    archives: [],
    trash: [],
    labels: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }

];
