const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CovidAtesSchema = new Schema({
  HeaderId: {
    type: String,
    required: true,
  },
  PersonelId: String,
  Ates: Number,
  Saat: Number,
});

module.exports = mongoose.model("CovidAtes", CovidAtesSchema);
