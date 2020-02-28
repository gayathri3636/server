const express = require("express");
const router = express.Router();
const User = require("../schema/users");
const db = require("../config/db").url;

router.get("/", (req, res) => {
    res.send({ message: "hello server" });
  });

  router.post("/adduser", (req, res) => {
    let user = new User(req.body);
    user
      .save()
      .then(user => {
        res.status(200).send("success");
      })
      .catch(err => {
        res.status(400).send("Failed");
      });
  });

  router.get("/getuser", (req, res) => {
    User.find((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  });
  
  module.exports = router;