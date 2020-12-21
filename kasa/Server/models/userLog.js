const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserLogSchema = new Schema({
    actions : {
        type :String
    },
    response : {
        type : String
    },
    token : {
        type:String
    },
    Date:  {
        type: Date,
        default : Date.now
    }
})

module.exports = UsersLog = mongoose.model('userLog',UserLogSchema)