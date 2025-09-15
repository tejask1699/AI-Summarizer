const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables CORS for all routes

// Import routes
const authRoutes = require("./routes/auth");

// Base routes
app.get("/", (req, res) => {
  res.send("Hello from the Express app!");
});

// Sample API route
app.get("/api/data", (req, res) => {
  res.json({
    message: "This is some data from the API.",
    timestamp: new Date(),
  });
});

// Auth routes
app.use("/api/auth", authRoutes);

// Export the app to be used by server.js
module.exports = app;
