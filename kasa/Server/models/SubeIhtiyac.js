
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const masrafSchema= new Schema({
    subeId: {
        type: String,
        required: true
    },
    urunAdi:{
        type:String
    },
    miktar : {
        type : Number
    },
    gun:{
        type : String
    }
    
})

module.exports = UserPermission = mongoose.model('SubeIhtiyac', masrafSchema)
