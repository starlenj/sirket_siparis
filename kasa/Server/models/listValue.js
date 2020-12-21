const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema= new mongoose.Schema({

    type :{ type:String,required:true },
    headerId :{ type:String,required:true },
    value :{ type:String,default  : "" },
    name :{ type:String,required:true },
});

module.exports  =restful.model('ListValue',ListHeaderSchema);

