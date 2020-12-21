const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ServisSchema = new Schema({
  Semt: String,
  ServisBedeli: String,
  MinimumTutar: String,
  SubeId: String,
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Servis", ServisSchema);
