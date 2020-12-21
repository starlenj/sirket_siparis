const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const UserSchema = new Schema({
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
  },
  Sube: {
    type: String,
  },
  Status: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("Password")) {
    return next();
  }
  bcrypt.hash(this.Password, 10).then((hash) => {
    this.Password = hash;
    next();
  });
});
module.exports = mongoose.model("User", UserSchema);
