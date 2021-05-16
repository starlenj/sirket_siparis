const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema = new mongoose.Schema({

    name: { type: String, required: true },
    groupName: { type: String, required: true },

});

module.exports = restful.model('RaporProduct', ListHeaderSchema);

