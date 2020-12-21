const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ErrorSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  userInfo: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Errors", ErrorSchema);
