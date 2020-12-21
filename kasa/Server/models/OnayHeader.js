const restful = require('node-restful');
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    Date: { type: String },
});

module.exports = restful.model('OnayHeader', ListHeaderSchema);

