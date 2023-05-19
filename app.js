const express = require("express");
const axios = require("axios");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Define a route to retrieve and render the JSON data
app.get("/", async (req, res) => {
  try {
    // Retrieve the JSON data
    const response = await axios.get(
      "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
    );
    const jsonData = response.data;

    // Render the JSON data with the EJS template
    res.render("index", { jsonData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.get("/", async (req, res) => {
  try {
    // Retrieve the JSON data
    const response = await axios.get(
      "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
