const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CovidFormHeaderSchema = new Schema({
  SubeId: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: String,
  },
});

module.exports = mongoose.model("CovidFormHeader", CovidFormHeaderSchema);
