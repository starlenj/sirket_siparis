const restful = require('node-restful');
const mongoose = restful.mongoose;

const ListHeaderSchema = new mongoose.Schema({
    HeaderId: { type: String, required: true },
    UserId: { type: String, required: true },
    Status: { type: Boolean, required: true, default: false },
    BelgeId: { type: String, required: true, },
    Date: { type: String },
});

module.exports = restful.model('OnayList', ListHeaderSchema);

