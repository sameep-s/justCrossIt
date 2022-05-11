import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */


const note1 = {
  _id: uuid(),
  title: "Default",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium tenetur repellat assumenda architecto a.",
  priority: "LOW",
  tags: ['high', 'sore', 'pruple'],
  color: "red"
}

const note2 = {
  _id: uuid(),
  title: "Default2",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium tenetur repellat assumenda architecto a.",
  priority: "HIGH",
  tags: ['high', 'sore', 'pruple'],
  color: "blue"
}

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
