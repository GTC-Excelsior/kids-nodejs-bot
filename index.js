"use strict";
const PORT = process.env.PORT || 8080; // default port 8080
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
