const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dateString = "2014-01-22T14:56:59.301Z";
$gte : new Date(dateString)


const competitionSchema = new Schema({
  eventName: { type: String, required: true },
  date: Date,
  eventType: { type: String, required: true },
  horse: { type: String, required: true },
  placing: { type: Number, required: true },
  penalties: { type: Number, required: true },
  resultNotes: {type: String},
  author: { type: String },
});

const Competition = mongoose.model("Competition", competitionSchema);

module.exports = Competition;
