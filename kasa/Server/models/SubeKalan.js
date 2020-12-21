const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masrafSchema = new Schema({
  subeId: {
    type: String,
    required: true
  },
  urunAdi: {
    type: String
  },
  miktar: {
    type: Number
  },
  tarih: {
    type: String
  },
  gun: {
    type: String
  }
});

module.exports = UserPermission = mongoose.model("SubeKalan", masrafSchema);
