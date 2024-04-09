const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.plugin(plm);

const User = mongoose.model("User", userSchema);

module.exports = User;
