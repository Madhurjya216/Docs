const express = require("express");
const router = express.Router();
const Note = require("../schema/postSchema");
const User = require("../schema/userSchema");
const passport = require("passport");
const pl = require("passport-local");
passport.use(new pl(User.authenticate()));

const postRoute = async (req, res) => {
  try {
    const notes = new Note({
      title: req.body.title,
      message: req.body.message,
    });
    const data = await notes.save();
    if (data) {
      res.send("Uploaded!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getRoute = async (req, res) => {
  try {
    // Check if user is logged in before proceeding
    // if (!req.isAuthenticated()) {
    //   return res.status(401).send("Unauthorized");
    // }

    const data = await Note.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteRoute = async (req, res) => {
  try {
    const { title, message } = req.body;
    const dataId = req.params.id;
    const data = await Note.findByIdAndDelete(dataId, {
      title,
      message,
    });
    if (data) {
      res.send(data);
    } else {
      res.send("Error!");
    }
  } catch (error) {
    console.log(error);
  }
};

// passport stuff
const Signup = (req, res) => {
  try {
    const data = new User({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
    });

    User.register(data, req.body.password).then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("http://localhost:3000/home");
      });
    });
  } catch (error) {
    console.log("Error");
  }
};

const Login = passport.authenticate("local", {
  successRedirect: "http://localhost:3000/home",
  failureRedirect: "http://localhost:3000/login",
});

const Logout = (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/login");
  });
};

function isLoggIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = {
  postRoute,
  getRoute,
  deleteRoute,
  Signup,
  Login,
  Logout,
  isLoggIn,
};
