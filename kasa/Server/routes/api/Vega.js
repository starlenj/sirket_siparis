const expres = require('express')
const route = expres.Router()
const Vega = require('../../Controller/Vega')
const VegaBelge = require('../../Controller/VegaBelge')

// @router GET  api/Sube
// @desc Get All Sube
// @access Public

route.get('/GetFirma', Vega.GetFirmaList)
route.get('/GetDonem', Vega.GetDonem)
route.get('/GetDepo', Vega.GetDepo)
route.get('/GetStokList', Vega.GetStokList)
route.post('/GetVegaKasa', Vega.GetKasaReport)

route.post('/GetVegaKasaToplam', Vega.GetKasaReportTotal)


module.exports = route