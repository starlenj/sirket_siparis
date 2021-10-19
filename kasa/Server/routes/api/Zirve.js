const expres = require('express')
const route = expres.Router()
const Vega = require('../../Controller/ZirveController')

// @router GET  api/Sube
// @desc Get All Sube
// @access Public

route.get('/GetDogumgunu', Vega.BugunDogumGunu)


module.exports = route
