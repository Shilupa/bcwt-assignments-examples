"use strict";
// catRoute

const express = require("express");
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController');

const upload = multer({dest: 'uploads/'});

router.get("/", catController.getCats);

router.get("/:catId", catController.getCat);

router.post('/', upload.single('cat') ,catController.createCat);

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
