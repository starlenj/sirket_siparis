const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserPermissions = new Schema({
    name: {
        type: String,
        required: true
    },
    value:{
        type:Boolean,
        default:false
    },
    userId : {
        type:String,
        required: true
    }
})

module.exports = UserPermission = mongoose.model('Permission', UserPermissions)
