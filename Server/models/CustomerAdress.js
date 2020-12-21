const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerAddressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  status: { type: Number, default: 1 },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CustomerAddress", CustomerAddressSchema);
