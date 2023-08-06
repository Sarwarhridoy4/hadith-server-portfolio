require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;


// Connect to MongoDB
mongoose.connect(MONGODB_URI),
  {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 15, // Set the connection pool size to 10 (default is 5)
  };
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});