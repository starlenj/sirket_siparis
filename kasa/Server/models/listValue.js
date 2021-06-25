const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema= new mongoose.Schema({

    type :{ type:String,required:true },
    headerId :{ type:String,required:true },
    value :{ type:String,default  : "" },
    dogruPuani :{ type:Number,default  : 0,required:true },
    yalnisPuani :{ type:Number,default  : 0 , required:true},
    name :{ type:String,required:true },
});

module.exports  =restful.model('ListValue',ListHeaderSchema);

