// server.js
require("dotenv").config(); // Load environment variables from .env file
const http = require("http");
const app = require("./app"); // Import the Express app

const PORT = process.env.PORT || 5000;

// Create an HTTP server
const server = http.createServer(app);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});
