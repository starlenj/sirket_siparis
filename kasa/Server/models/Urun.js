
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const masrafSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    
})

module.exports = UserPermission = mongoose.model('Urunler', masrafSchema)
