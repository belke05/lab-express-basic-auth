const express = require("express");
const router = express.Router();
const UserMOdel = require("./../model/user");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
