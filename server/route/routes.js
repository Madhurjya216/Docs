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

const getRoute =  async (req, res) => {
  try {
    const data = await Note.find();
    res.send(data);
  } catch (error) {
    console.log(error);
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
router.post("/signup", function (req, res) {
  const data = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
  });

  User.register(data, req.body.password).then(function (registeredUser) {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/get");
      res.send("ok!");
    });
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/get",
    failureRedirect: "/login",
  })
);

router.get("/logout", function (req, res) { 
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/login");
  });
});

function isLoggIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = { postRoute, getRoute, deleteRoute };
