"use strict";
// userRoute

const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/", userController.getUsers);

router.get("/:userId", userController.getUser);

router.post("/", userController.createUser);

router.put("/user", (req, res) => {
  console.log(req);
  res.send("From this endpoint you can edit users.");
});

router.delete("/user", (req, res) => {
  res.send("From this endpoint you can delete users.");
});
//router.put('TODO');
//router.delete('TODO');

module.exports = router;