const restful = require('node-restful');
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
    sube: { type: String, required: true },
    user: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    Date: { type: Date, default: Date.now() },
});

module.exports = restful.model('CodeHareket', ListHeaderSchema);

