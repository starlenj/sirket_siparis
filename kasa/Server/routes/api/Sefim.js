const expres = require('express')
const route = expres.Router()
const Sefim = require('../../Controller/Sefim')

// @router GET  api/ShopReport
// @desc Get All ShopReport
// @access Public

route.post('/GetCiro', Sefim.GetCiro)
route.post('/GetToplamCiro', Sefim.GetToplamCiro)
route.post('/GetUrunBazliSatis', Sefim.UrunBazliSatis)

module.exports = route