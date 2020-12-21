const mongoose = require('mongoose')
const Schema = mongoose.Schema

const errorSchema = new Schema({
    class : {
        type:String
    },
    actions:  {
        type :String
    },
    token : {
        type : String
    },
    message : {
        type : String
    },
    Date : {
        type : Date,
        default : Date.now
    }
})
module.exports = Errors = mongoose.model('Errors',errorSchema)