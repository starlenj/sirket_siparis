const mongoose = require('mongoose')
const schema = mongoose.Schema

const sessionSchema = new Schema({
    token : {
        type : String,
        unique:true
    },
    lastLogin : {
        type :Date,
        default : Date.now
    },
    wrongPassword : {
        type : Number
    },
    isActive : {
        type : Boolean,
        default : false
    }
})
module.exports = Sesssion  = mongoose.model('Session',sessionSchema)


