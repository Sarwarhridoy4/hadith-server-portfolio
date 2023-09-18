const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const db = require("./Database/db");
require("dotenv").config(); // Load environment variables from .env file

const Hadith = require("./models/hadith");

app.use(express.json());
app.use(cors()); // Use the cors middleware

app.get('/all-hadith', async (req, res) => {
  try {
    const randomHadith = await Hadith.find({});
    res.json(randomHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/random-hadith', async (req, res) => {
  try {
    const randomHadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomHadith[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Define the API route for searching by various fields
app.get('/search/:field/:query', async (req, res) => {
  try {
    const searchField = req.params.field.toLowerCase();
    const searchQuery = req.params.query.toLowerCase();
    
    // Map the search field to the corresponding field in the database
    const fieldMapping = {
      hadith: 'hadith',
      narrator: 'narrator',
      source: 'source',
      reference: 'reference',
    };
    
    const fieldToSearch = fieldMapping[searchField];
    
    if (!fieldToSearch) {
      return res.status(400).json({ error: 'Invalid search field' });
    }

    const matchingHadith = await Hadith.find({
      [fieldToSearch]: { $regex: searchQuery, $options: 'i' }, // Case-insensitive regex search on the selected field
    });
    
    res.json(matchingHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get("/", (req, res) => {
  res.send(`Welcome to my random hadith server`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
