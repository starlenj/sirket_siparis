const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SelectOptionsShchema = new Schema({
  ProductId: String,
  OptionsId: String,
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SelectOptions", SelectOptionsShchema);
