import express from "express";
import { v4 as uuidv4 } from "uuid";
uuid();

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(
    `User with the name ${user.firstName} has been added to the Database`
  );
});

export default router;
// All routes in this file already start with /users
