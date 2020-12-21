const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderTypeSchema = new Schema({
  Name: String,
  SubeId: String,
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("OrderType", OrderTypeSchema);
