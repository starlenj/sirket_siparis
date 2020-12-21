const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const CustomerSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Status: { type: Number, default: 1 },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
CustomerSchema.pre("save", function (next) {
  if (!this.isModified("Password")) {
    return next();
  }
  bcrypt.hash(this.Password, 10).then((hash) => {
    this.Password = hash;
    next();
  });
});

module.exports = mongoose.model("Customer", CustomerSchema);
