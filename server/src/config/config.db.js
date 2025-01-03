const mongoose = require('mongoose');
const {MONGO_URI} =require('./server.config')
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB Connected successfully");
    } catch (error) {
        console.error("DB connection error:", error);
    }
}

module.exports = connectDB;
