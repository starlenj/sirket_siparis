const restful = require('node-restful');
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true, unique: true },
    sourceId: { type: String, required: true, unique: true },
    tur: { type: String, required: true, unique: true },
    Date: { type: Date, default: Date.now() },
    status: { type: Number, default: 1 },
});

module.exports = restful.model('stok', ListHeaderSchema);

