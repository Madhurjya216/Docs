const express = require("express");
const router = express.Router();
const Note = require("../schema/postSchema");

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

module.exports = {
  postRoute,
  getRoute,
  deleteRoute,
};
