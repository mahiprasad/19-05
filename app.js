//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const _ = require("lodash");
const https = require("https");
const axios = require("axios");

const app = express();
dotenv.config();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//---------------------------------------------------------------
const url =
  "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json";

let jsonData = fetch(url)
  .then((res) => res.json())
  .catch((err) => {
    throw err;
  });
console.log(jsonData);

app.get("/", (req, res) => {
  axios
    .get(url)
    .then((response) => {
      const jsonData = response.data;
      res.json(jsonData.employees);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("An error occurred");
    });
});

//--------------------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
