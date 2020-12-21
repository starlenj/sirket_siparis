const expres = require('express')
const route = expres.Router()
const VegaConfig = require('../../Controller/VegaConfig')

// @router GET  api/Sube
// @desc Get All Sube
// @access Public

route.get('/', VegaConfig.List)


// @router POST  api/Sube
// @desc Create a Sube
// @access Public


route.get('/:id', VegaConfig.Get)


// @router POST  api/Sube
// @desc Create a Sube
// @access Public




route.post('/', VegaConfig.New)


// @router DELETE  api/Sube/:id
// @desc Delete a Sube
// @access Public

route.delete('/:id', VegaConfig.Delete)

// @router PUT  api/Sube/:id
// @desc Update a Sube
// @access Public
route.put('/:id', VegaConfig.Update)
route.put('/DepoUpdate/:id', VegaConfig.UpdateDepo)
route.put('/FirmaDonemUpdate/:id', VegaConfig.UpdateFirmaDonem)

module.exports = route