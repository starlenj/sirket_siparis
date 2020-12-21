const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CalismaSaatleriSchema = new Schema({
  Gun: String,
  Saat: String,
  Status: { type: Number, default: 1 },
  SubeId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CalismaSaatleri", CalismaSaatleriSchema);
