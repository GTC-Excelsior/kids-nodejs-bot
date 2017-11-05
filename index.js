"use strict";
const PORT = 8080; // default port 8080
const express = require("express");
const pg = require("pg");
const app = express();
var router = express.Router();
const testResults = require("./testScores.js");


var db = require('./queries.js');


router.get('/api/kids', db.getAllScores);

app.set("view engine", "ejs");
app.use(express.static("public"));

let data = {
  results: testResults.scores,
  scores: db.scores
};

app.get("/", (req, res) => {
  let templateVars = {
    data
  };
  res.render("index", templateVars);
});

app.get("/feedback", (req, res) => {
  let templateVars = {
    data
  };
  res.render("feedback", templateVars);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
