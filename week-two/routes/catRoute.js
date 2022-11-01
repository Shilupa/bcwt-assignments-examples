"use strict";
// catRoute

const express = require("express");
const router = express.Router();

router.get("/cat", (req, res) => {
  //console.log(req);
  res.send("From this endpoint you can get cats.");
});

router.get("/cat/:catId", (req, res) => {
  //console.log(req.params);
  res.send("From this endpoint you can get cats with id " + req.params.catId);
});

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
