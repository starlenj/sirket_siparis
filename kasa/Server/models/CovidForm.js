const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({
    created_at: {
        type: String
    },
    Ates: {
        PersonelId: {
            onBir: String,
            onUc: String,
            onBes: String,
            onYedi: String,
            onDokuz: String,
            yirmiBir: String
        }
    },
    RutinHijyen: {
        YerTemizligi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        TezgahTemizligi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        EkipmanTemizligi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        KasaBolgeTemizligi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        DinlenmeMasa: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        SurekliTemas: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        FirinMaya: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        EkmekTepsi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        DepoDuzen: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        AracIsleri: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        SoyunmaOdasi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        },
        IzgaraTemizligi: {
            on: Boolean,
            onBir: Boolean,
            onIki: Boolean,
            onUc: Boolean,
            onDort: Boolean,
            onBes: Boolean,
            onAlti: Boolean,
            onYedi: Boolean,
            onSekiz: Boolean,
            onDokuz: Boolean,
            yirmi: Boolean,
            yirmiBir: Boolean,
            yirmiIki: Boolean
        }
    },
    status: {
        type: Number,
        default: 0
    },
    SubeId: String




})
module.exports = Sesssion = mongoose.model('CovidFormView', shopReportSchema)


