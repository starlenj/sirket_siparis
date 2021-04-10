
const  expres = require('express')
const route = expres.Router()
const ShopReport = require('../../Controller/SubeKalan')

// @router GET  api/ShopReport
// @desc Get All ShopReport
// @access Public

route.get('/',ShopReport.List)


// @router POST  api/ShopReport
// @desc Create a ShopReport
// @access Public

route.post('/',ShopReport.New)


// @router DELETE  api/ShopReport/:id
// @desc Delete a ShopReport
// @access Public

route.delete('/:id',ShopReport.Delete)

// @router PUT  api/ShopReport/:id
// @desc Update a ShopReport
// @access Public
route.put('/:id',ShopReport.Update)

route.get('/:id',ShopReport.Get)
route.post('/SubeKalanReport',ShopReport.GetReportData)
route.post('/SubeKalanGetDetail',ShopReport.GetDetail)
route.post('/GetReport',ShopReport.GetSubeReport)

module.exports = route