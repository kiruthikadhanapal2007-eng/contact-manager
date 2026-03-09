const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log("MongoDB connection error:", error);
});
const express = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ConnectHub API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
