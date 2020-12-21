const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CasihierHeaderSchema = new Schema({
  HeaderId: {
    type: String,
    required: true,
  },
  Type: String,
  Value: Number,
});

module.exports = mongoose.model("CashierHeader", CasihierHeaderSchema);
