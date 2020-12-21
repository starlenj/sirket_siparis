const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserLogSchema = new Schema({
  userInfo: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserLog", UserLogSchema);
