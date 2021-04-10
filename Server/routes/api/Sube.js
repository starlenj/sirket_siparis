const expres = require('express')
const route = expres.Router()
const Sube = require('../../Controller/Sube')

// @router GET  api/Sube
// @desc Get All Sube
// @access Public

route.get('/', Sube.List)


// @router POST  api/Sube
// @desc Create a Sube
// @access Public


route.get('/:id', Sube.Get)


// @router POST  api/Sube
// @desc Create a Sube
// @access Public




route.post('/', Sube.New)


// @router DELETE  api/Sube/:id
// @desc Delete a Sube
// @access Public

route.delete('/:id', Sube.Delete)

// @router PUT  api/Sube/:id
// @desc Update a Sube
// @access Public
route.put('/:id', Sube.Update)

module.exports = route