
const expres = require('express')
const route = expres.Router()
const ShopReport = require('../../Controller/ShopReportView')

// @router GET  api/ShopReport
// @desc Get All ShopReport
// @access Public

route.get('/', ShopReport.List)


// @router POST  api/ShopReport
// @desc Create a ShopReport
// @access Public

route.post('/', ShopReport.New)


// @router DELETE  api/ShopReport/:id
// @desc Delete a ShopReport
// @access Public

route.delete('/:id', ShopReport.Delete)

// @router PUT  api/ShopReport/:id
// @desc Update a ShopReport
// @access Public
route.put('/:id', ShopReport.Update)

route.get('/:id', ShopReport.GetReport)

route.post('/GetReport', ShopReport.Get)
route.post('/CheckReport', ShopReport.CheckReport);
route.post('/GetToplamKasa', ShopReport.GetToplamKasa);
route.post('/GetDateReport', ShopReport.GetDateReport);
route.post('/GetGenelToplam', ShopReport.GetGenelToplam);
route.post('/OnaysizKasaListesi', ShopReport.OnaysizKasaListesi);


module.exports = route