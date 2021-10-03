const restful = require("node-restful");
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
  groupId: { type: String, required: true, unique: true },
  statusName: { type: String, required: true },
  Date: { type: Date, default: Date.now() },
  status: { type: Number, default: 1 },
});

module.exports = restful.model("stokSablon", ListHeaderSchema);
