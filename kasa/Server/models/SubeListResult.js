const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema = new mongoose.Schema({

    HeaderId: { type: String, required: true },
    ListId: { type: String, required: true },
    Result: { type: String, required: true },

});

module.exports = restful.model('SubeListResult', ListHeaderSchema);

