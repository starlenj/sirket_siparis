const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema = new mongoose.Schema({

    SubeId: { type: String, required: true },
    ListHeaderId: { type: String, required: true },
    Date: { type: String, required: true }
});

module.exports = restful.model('SubeListHeader', ListHeaderSchema);

