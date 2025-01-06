
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT } = require("./config/server.config");
const connectDB = require("./config/config.db");
const router=require('./routes/auth.route')
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth",router);
app.use("/api/user", require("../src/routes/auth.route"));

// Start server and connect to database
const startServer = async () => {
  try {
    await connectDB(); // Ensures the database connection is established before starting the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1); // Exit process with failure code
  }
};

startServer();
