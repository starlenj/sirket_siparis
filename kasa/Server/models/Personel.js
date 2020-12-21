const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({


    status: {
        type: Boolean,
        default: true
    },
    SubeId: String,
    Ad: String,
    Soyad: String
})
module.exports = Sesssion = mongoose.model('Personel', shopReportSchema)


