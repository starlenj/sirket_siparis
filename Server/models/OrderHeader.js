const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  OrderStatus: {
    type: Number,
    default: 0,
  },
  OrderType: {
    type: String,
    required: true,
  },
  CustomerName: String,
  Phone: String,
  Plaka: String,
  Aciklama: String,
  OrderChannel: {
    type: String,
    required: true,
  },
  CustomerId: {
    type: String,
    required: true,
  },
  SubeId: {
    type: String,
    required: true,
  },
  OrderCancelInfo: {
    type: String,
  },
  Note: {
    type: String,
  },

  Discount: {
    type: Number,
  },
  ServicePrice: {
    type: Number,
  },
  PaymentType: String,
  Date: {
    type: Date,
    default: Date.now,
  },
  Adres: String
});

module.exports = mongoose.model("OrderHeader", OrderSchema);
