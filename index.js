const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const db = require("./Database/db");
require("dotenv").config(); // Load environment variables from .env file

const Hadith = require("./models/hadith");

app.use(express.json());
app.use(cors()); // Use the cors middleware

let currentRandomHadith = {}; // Store the current random Hadith

// Function to fetch a random Hadith
const fetchRandomHadith = async () => {
  try {
    const randomHadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);
    currentRandomHadith = randomHadith[0];
  } catch (error) {
    console.error(error);
  }
};

// Fetch a random Hadith on server startup
fetchRandomHadith();

// Refresh the random Hadith every minute
setInterval(fetchRandomHadith, 60 * 1000); // 60 seconds * 1000 milliseconds

app.get("/random-hadith", async (req, res) => {
  try {
    res.json(currentRandomHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/", (req, res) => {
  res.send(`Welcome to my random hadith server`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
