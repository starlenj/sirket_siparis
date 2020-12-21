const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CovidAtesSchema = new Schema({
  HeaderId: {
    type: String,
    required: true,
  },
  IslemAdi: String,
  IslemDegeri: Boolean,
  Saat: Number,
});

module.exports = mongoose.model("CovidHijyen", CovidAtesSchema);
