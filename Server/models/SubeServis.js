const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SubeSchema = new Schema({
  SubeId: {
    type: String,
  },
  Name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("SubeServis", SubeSchema);
