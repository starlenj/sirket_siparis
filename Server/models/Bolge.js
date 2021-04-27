const restful = require('node-restful');
const mongoose = restful.mongoose;
const BolgeSchema = new mongoose.Schema({
  Status: { type: Number, default: 1 },
  SubeId: String,
  Sehir: String,
  BolgeAdi: String,
  Tutar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = restful.model('Bolgeler', BolgeSchema);


