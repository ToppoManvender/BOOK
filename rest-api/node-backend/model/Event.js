const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "Event",
  }
);

module.exports = mongoose.model("Event", Event);
