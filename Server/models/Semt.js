const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SepetSchema = new Schema({
  Name: { type: String, require: true, unique: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Status: { type: Boolean, default: true },
});

module.exports = mongoose.model("Semt", SepetSchema);
