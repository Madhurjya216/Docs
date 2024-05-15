require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const db = require("./db");
const bodyParser = require("body-parser");
const {
  postRoute,
  getRoute,
  deleteRoute,
} = require("./route/routes");


// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// db connection
db();


app.get("/", function (req, res) {
  res.send("Hello World");
});

// routes
app.use("/upload", postRoute);
app.use("/get", getRoute);
app.use("/delete/:id", deleteRoute);

// server listening
app.listen(port, () => {
  console.log(`Server is listening`);
});
