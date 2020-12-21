const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({
    headerId : {
        type : String,
    },
    stokNo:{
        type:Number
    },
    birimNo:{
        type : Number
    },
    miktar : {
        type : Number
    },
    created_at:{
        type:String
    }
   
})
module.exports = Sesssion  = mongoose.model('SayimHareket',shopReportSchema)


