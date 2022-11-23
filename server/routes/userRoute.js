"use strict";
// userRoute

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/userController");

//TODO:  chain the router method calls
router
  .get("/", userController.getUsers)
  .get('/token', userController.checkToken)
  .get("/:userId", userController.getUser)
  .post(
    "/",
    body("name").isLength({ min: 3 }).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("passwd").isLength({ min: 8 }).trim(),
    userController.createUser
  )
  .put("/", (req, res) => {
    res.send("From this endpoint you can edit users.");
    // TODO: Replace with controller and data model
    // TODO: add validators too
  })
  .delete("/", (req, res) => {
    // TODO: Replace with controller and data model
    res.send("From this endpoint you can delete users.");
  });
//router.put('TODO');
//router.delete('TODO');

module.exports = router;
