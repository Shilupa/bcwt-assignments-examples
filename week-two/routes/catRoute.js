"use strict";
// catRoute

const express = require("express");
const router = express.Router();
const catController = require('../controllers/catController');

router.get("/", catController.getCats);

router.get("/:catId", catController.getCat);

router.post("/cat", (req, res) => {
  res.send("From this endpoint you can add more cats.");
});

router.put("/cat", (req, res) => {
  console.log(req);
  res.send("From this endpoint you can edit cats.");
});

router.delete("/user", (req, res) => {
  res.send("From this endpoint you can delete users.");
});
//router.put('TODO');
//router.delete('TODO');

module.exports = router;
