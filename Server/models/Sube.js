const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SubeSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Status: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  PaketServis: { type: Boolean, default: false },
  GelAl: { type: Boolean, default: false },
  ArabayaServis: { type: Boolean, default: false },
  RestorantSiparis: { type: Boolean, default: false },
});

module.exports = mongoose.model("Subes", SubeSchema);
