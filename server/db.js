const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose
      .connect(
        process.env.MONGODB_URI
      )
      .then((res) => {
        console.log("connected!"); 
      });
  } catch (error) {
    console.log(error);
  }
}; 
