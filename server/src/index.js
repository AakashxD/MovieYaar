
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app=express();
const {PORT}=require('./config/server.config');
const connectDB=require('./config/config.db')
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
   connectDB();
})
