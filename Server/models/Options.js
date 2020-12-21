const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OptionsSchema = new Schema({
  Name: String,
  MinQuantity: Number,
  MaxQuantity: Number,
  SelectType: String,
  Order: Number,
  IsRequired: { type: Boolean, default: false },
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Options", OptionsSchema);
