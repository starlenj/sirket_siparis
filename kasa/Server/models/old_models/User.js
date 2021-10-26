const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    name:{
        type : String,
        required:true
    },
    lastName : {
        type : String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique : true
    },
    address : {
        type:String, 
        required:true
    },
    password : {
        type:String,
        required:true
    },
    date: { type: Date, default: Date.now },
    isAdmin:{
        type : Boolean,
        required:true,
        default : false
    },
    subeId:{
        type:String,
        required:true,
        default:0
    }

})
module.exports = Users = mongoose.model('user',UserSchema)
