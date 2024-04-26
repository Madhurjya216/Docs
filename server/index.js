require("dotenv").config();
const express = require("express");
const app = express();
const port = 9500;
const cors = require("cors");
const db = require("./db");
const bodyParser = require("body-parser");
const {
  postRoute,
  getRoute,
  deleteRoute,
  Signup,
  Login,
  Logout,
  isLoggIn,
} = require("./route/routes");
const expressSession = require("express-session");
const passport = require("passport");
const usersRouter = require("./schema/userSchema");

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// db connection
db();

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "process.env.MY_SECREAT_KEY",
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// routes
app.use("/register", Signup);
app.use("/login", Login);
app.use("/logout", Logout);
app.use("/upload", postRoute);
app.use("/get", getRoute);
app.use("/delete/:id", deleteRoute);

// server listening
app.listen(port, () => {
  console.log(`Server is listening at:${port}`);
});
