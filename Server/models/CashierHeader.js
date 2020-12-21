const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CasihierHeaderSchema = new Schema({
  SubeId: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: String,
  },
  Status: Number,
});

module.exports = mongoose.model("CashierHeader", CasihierHeaderSchema);
