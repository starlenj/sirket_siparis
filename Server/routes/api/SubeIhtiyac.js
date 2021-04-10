
const  expres = require('express')
const route = expres.Router()
const ShopReport = require('../../Controller/SubeIhtiyac')

// @router GET  api/ShopReport
// @desc Get All ShopReport
// @access Public

route.get('/',ShopReport.List)
route.get('/:id',ShopReport.Get)


// @router POST  api/ShopReport
// @desc Create a ShopReport
// @access Public

route.post('/',ShopReport.New)

route.post('/SubeIhtiyacReport',ShopReport.GetReportData)
route.post('/GetReport',ShopReport.GetSubeReport)


module.exports = route