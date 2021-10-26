const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SubeSchema = new Schema({
    name:{
        type : String,
        required:true
    },
    host : {
        type : String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    username : {
        type:String, 
        required:true
    },
    port : {
        type:String,
        required:true
    },
    date: { type: Date, default: Date.now },
    dbname:{
        type : String,
        required:true
    },
    depoId:{
        type:Number,
        required:true
    },
    Order:{ type:Number,default : 0 }

})

module.exports = Sube = mongoose.model('Sube',SubeSchema)
