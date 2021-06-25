
const restful = require('node-restful');
const mongoose = restful.mongoose;
//schema
//
const ListHeaderSchema= new mongoose.Schema({

    name :{ type:String,required:true },   
    type :{ type:String,required:true },   
    grupPuani :{ type:Number,required:true,default: 0 },   
	  status : { type : Boolean,default : true }
});

module.exports  =restful.model('ListHeader',ListHeaderSchema);


