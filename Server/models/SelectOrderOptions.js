const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SelectOrderOptionsShchema = new Schema({
  OrderBodyId: String,
  OptionsId: String,
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "SelectOrderOptions",
  SelectOrderOptionsShchema
);
