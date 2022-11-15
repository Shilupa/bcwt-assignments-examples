"use strict";
// userRoute

const express = require("express");
const router = express.Router();
const { body} = require("express-validator");

const userController = require("../controllers/userController");

//TODO:  chain the router method calls
router
  .get("/", userController.getUsers)
  .get("/:userId", userController.getUser)
  .post("/", 
  body("name").isLength({ min: 3 }), 
  body("email").isEmail(),
  body("passwd").isLength({ min: 8 }),
  userController.createUser)
  .put("/user", (req, res) => {
    res.send("From this endpoint you can edit users.");
    // TODO: Replace with controller and data model
  });

router.delete("/user", (req, res) => {
  res.send("From this endpoint you can delete users.");
});
//router.put('TODO');
//router.delete('TODO');

module.exports = router;
