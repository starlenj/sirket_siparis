const restful = require('node-restful');
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    Date: { type: Date, default: Date.now() },
});

module.exports = restful.model('Code', ListHeaderSchema);

