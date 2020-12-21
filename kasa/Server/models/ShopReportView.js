const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopReportSchema = new Schema({
    subeId: {
        type: String,
    },
    userId: {
        type: String,
    },
    created_at: {
        type: String
    },
    ticket: {
        yuz: {
            type : String,
            default  : '0'
        },
        ikiyuz: {
            type : String,
            default  : '0'
        },
        elli: {
            type : String,
            default  : '0'
        },
        yirmi: {
            type : String,
            default  : '0'
        },
        ontl: {
            type : String,
            default  : '0'
        },
        bes: {
            type : String,
            default  : '0'
        },
        bir: {
            type : String,
            default  : '0'
        },
        sifirbes: {
            type : String,
            default  : '0'
        },
        sifiryirmibes: {
            type : String,
            default  : '0'
        },
        sifirbir: {
            type : String,
            default  : '0'
        },
        sifirsifirbes: {
            type : String,
            default  : '0'
        }
    },
    sodexo: {
        yuz: {
            type : String,
            default  : '0'
        },
        ikiyuz: {
            type : String,
            default  : '0'
        },
        elli: {
            type : String,
            default  : '0'
        },
        yirmi: {
            type : String,
            default  : '0'
        },
        ontl: {
            type : String,
            default  : '0'
        },
        bes: {
            type : String,
            default  : '0'
        },
        bir: {
            type : String,
            default  : '0'
        },
        sifirbes: {
            type : String,
            default  : '0'
        },
        sifiryirmibes: {
            type : String,
            default  : '0'
        },
        sifirbir: {
            type : String,
            default  : '0'
        },
        sifirsifirbes: {
            type : String,
            default  : '0'
        }
    },
    cash: {
        yuz: {
            type : String,
            default  : '0'
        },
        ikiyuz: {
            type : String,
            default  : '0'
        },
        elli: {
            type : String,
            default  : '0'
        },
        yirmi: {
            type : String,
            default  : '0'
        },
        ontl: {
            type : String,
            default  : ()=>{if(this.ontl === "") return 0},
        },
        bes: {
            type : String,
            default  : ()=>{if(this.bes === "") return 0},
        },
        bir: {
            type : String,
            default  : ()=>{if(this.bir === "") return 0},
           
        },
        sifirbes: {
            type : String,
            default  : ()=>{if(this.sifirbes === "") return 0},
        },
        sifiryirmibes: {
            type : String,
            default  : '0'
        },
        sifirbir: {
            type : String,
            default  : '0'
        },
        sifirsifirbes: {
            type : String,
            default  : '0'
        }
    },
    credit: {
        bir: {
            type : String,
            default  : '0'
        },
        iki: {
            type : String,
            default  : '0'
        },
        uc: {
            type : String,
            default  : '0'
        },
        dort: {
            type : String,
            default  : '0'
        },
        bes: {
            type : String,
            default  : '0'
        },
        alti: {
            type : String,
            default  : '0'
        },
        yedi: {
            type : String,
            default  : '0'
        }
    },
    masraf: {
        aciklamaBir: String,
        turuBir: String,
        tutarBir: String,
        resimBir: String,

        aciklamaIki: String,
        turuIki: String,
        tutarIki: String,
        resimIki: String,

        aciklamaUc: String,
        turuUc: String,
        tutarUc: String,
        resimUc: String,

        aciklamaDort: String,
        turuDort: String,
        tutarDort: String,
        resimDort: String,

        aciklamaBes: String,
        turuBes: String,
        tutarBes: String,
        resimBes: String,

        aciklamaAlti: String,
        turuAlti: String,
        tutarAlti: String,
        resimAlti: String
    },
    iade: {
        aciklamaBir: String,

        tutarBir: String,
        resimBir: String,

        aciklamaIki: String,

        tutarIki: String,
        resimIki: String,

        aciklamaUc: String,

        tutarUc: String,
        resimUc: String,

        aciklamaDort: String,

        tutarDort: String,
        resimDort: String,

        aciklamaBes: String,

        tutarBes: String,
        resimBes: String,

        aciklamaAlti: String,

        tutarAlti: String,
        resimAlti: String
    },
    setCardGunSonu: {
        type : String,
        default  : '0'
    },
    multinetGunSonu: {
        type : String,
        default  : '0'
    },
    metropolGunSonu: {
        type : String,
        default  : '0'
    },
    ceoCardGunSonu: {
        type : String,
        default  : '0'
    },
    avmKuponu: {
        type : String,
        default  : '0'
    },
    sinemaBileti: {
        type : String,
        default  : '0'
    },
    status: {
        type: Number,
        default: 0
    },
    sodexoGunSonu: {
        type : String,
        default  : '0'
    },
    ticketGunSonu: {
        type : String,
        default  : '0'
    },
    yemekSepeti:  {
        type : String,
        default  : '0'
    }



})
module.exports = Sesssion = mongoose.model('ShopReportView', shopReportSchema)


