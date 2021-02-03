const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  CategoryId: String,
  Name: String,
  Info: String,
  Price: Number,
  YemekSepetiPrice: { type: Number, default: 0 },
  Picture: String,
  Order: { type: Number, default: 0 },
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
