const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PersonelSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  SubeId: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Personel", PersonelSchema);
