
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
    created_at:{
        type : Date,
        default : Date.now
    }
   
})

module.exports = UserPermission = mongoose.model('GunIcindeYapilanUretim', masrafSchema)
