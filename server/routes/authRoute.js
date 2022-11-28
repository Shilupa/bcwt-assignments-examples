"use strict";
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { login } = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/login", login);
router.post(
  "/register",
  body("name").isLength({ min: 3 }).trim().escape(),
  body("email").isEmail().normalizeEmail(),
  body("passwd").isLength({ min: 8 }).trim(),
  userController.createUser
);

module.exports = router;
