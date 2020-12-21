const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({
    subeId : {
        type : String,
    },
    aciklama:{
        type:String
    },
    created_at:{
        type:String
    },
    status : {
        type : Boolean,
        default : false
    }
   
})
module.exports = Sesssion  = mongoose.model('SayimBaslik',shopReportSchema)


