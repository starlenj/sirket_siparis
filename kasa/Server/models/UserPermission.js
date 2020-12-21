const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserPermissions = new Schema({
    UserId: {
        type: String,
        required: true
    },
    PermissionId: {
        type: String,
        required: true
    }
})

module.exports = UserPermission = mongoose.model('UserPermission', UserPermissions)