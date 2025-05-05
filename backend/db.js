const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/mydatabase"; // Replace with your MongoDB URI  

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectToMongo;


