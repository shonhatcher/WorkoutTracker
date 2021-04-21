const { dir } = require("console");
const express = require("express");
const path = require("path");


// const db = require("../models");

// get public directory relative to this 
const directory = path.join(__dirname, "..", "public");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(directory, "index.html"));

  // db.Workout.create({name: ""})
})


router.get("/exercise", (req, res) => {
  res.sendFile(path.join(directory, "exercise.html"));
})

router.get("/stats", (req, res) => {
  res.sendFile(path.join(directory, "stats.html"));
})



module.exports = router;