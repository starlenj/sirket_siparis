const restful = require('node-restful');
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
    UserId: { type: String, required: true },
    headerId: { type: String, required: true },
    Date: { type: String },
});

module.exports = restful.model('OnayBody', ListHeaderSchema);

