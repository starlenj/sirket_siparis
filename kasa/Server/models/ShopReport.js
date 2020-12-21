const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({
    subeId : {
        type : String,
     },
    userId:{
        type:String,
    },
    created_at:{
        type:String
    },
    cash:{
        type:Number,
        default : 0
    },
    credit:{
        type:Number,
        default : 0
    },
    ticket:{
        type:Number,
        default : 0
    },
    sodexo:{
        type:Number,
        default : 0
    },
   
    multinet:{
        type:Number
    },
    setcard:{
        type:Number,
        default : 0
    }

})
module.exports = Sesssion  = mongoose.model('ShopReport',shopReportSchema)


