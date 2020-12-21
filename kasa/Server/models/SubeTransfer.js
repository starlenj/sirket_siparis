const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({
    kaynakSube : {
        type : String,
    },
    miktar:{
        type:Number
    },
    created_at:{
        type:String
    },
    stokNo:{
        type:Number
    },
    birimNo:{
        type:Number
    },
    status:{
        type:Number
    },
    userId:{
        type:String
    },
    stokKodu:{
        type:String
    },
    malinCinsi:{
        type:String
    },
    birimAdi:{
        type:String
    },
    onayMiktar:{
        type:Number,
        default:0
    },
    hedefSube:{
        type:String
    },
    aciklama:{
        type : String,
    },
    onayAciklama:{
        type : String,
    }
})
module.exports = Sesssion  = mongoose.model('SubeTransfer',shopReportSchema)


