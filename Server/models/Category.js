const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  Name: String,
  Status: { type: Number, default: 1 },
  Order: { type: Number, default: 0 },
  CategoryType: { type: String, default: "Menü" },
  SubeId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
