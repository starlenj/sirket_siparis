const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PermissionsSchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  },

  UserId: {
    type: String,
    required: true,
  },
  Status: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Permissions", PermissionsSchema);
