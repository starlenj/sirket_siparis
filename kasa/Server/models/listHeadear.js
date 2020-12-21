
const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema= new mongoose.Schema({

    name :{ type:String,required:true },    status : { type : Boolean,default : true }
});

module.exports  =restful.model('ListHeader',ListHeaderSchema);


