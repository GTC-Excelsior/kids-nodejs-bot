"use strict";
const PORT = 8080; // default port 8080
const express = require("express");
const app = express();
const testResults = require("./testScores.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

let data = {
  results: testResults.scores
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
