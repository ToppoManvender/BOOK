const express = require("express");
const eventRoute = express.Router();
const Event = require("../model/Event");

eventRoute.route("/add-event").post(async (req, res, next) => {
  try {
    const data = await Event.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

eventRoute.route("/").get(async (req, res, next) => {
  try {
    const data = await Event.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

eventRoute.route("/read-event/:id").get(async (req, res, next) => {
  try {
    const data = await Event.findById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

eventRoute.route("/update-event/:id").put(async (req, res, next) => {
  try {
    const data = await Event.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(data);
    console.log("Event updated successfully");
  } catch (error) {
    next(error);
  }
});

eventRoute.route("/delete-event/:id").delete(async (req, res, next) => {
  try {
    const data = await Event.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "Event deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = eventRoute;
