const express = require("express");
const bookRoute = express.Router();
const Book = require("../model/Book");

bookRoute.route("/add-book").post(async (req, res, next) => {
  try {
    const data = await Book.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

bookRoute.route("/").get(async (req, res, next) => {
  try {
    const data = await Book.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

bookRoute.route("/read-book/:id").get(async (req, res, next) => {
  try {
    const data = await Book.findById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

bookRoute.route("/update-book/:id").put(async (req, res, next) => {
  try {
    const data = await Book.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(data);
    console.log("Book updated successfully");
  } catch (error) {
    next(error);
  }
});

bookRoute.route("/delete-book/:id").delete(async (req, res, next) => {
  try {
    const data = await Book.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = bookRoute;
