import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  }
]


router.get('/', (req, res) => {
  console.log(users);
  res.send("Hello");
});

export default router;
// All routes in this file already start with /users