const mongoose = require("mongoose");

// Define the schema
const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
module.exports = mongoose.model("note", messageSchema);
