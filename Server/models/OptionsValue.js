const mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);
var Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;
const OptionsValueSchema = new Schema({
  Name: String,
  OptionsId: String,
  Price: Number,
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now
  },
  Order: { type: Number, default: 0 }
});

module.exports = mongoose.model("OptionsValue", OptionsValueSchema);
