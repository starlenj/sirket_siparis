const expres = require('express')
const route = expres.Router()
const Permission = require('../../Controller/Permission')
// @router GET  api/Product
// @desc Get All Product
// @access Public

route.get('/', Permission.List)


// @router POST  api/Permission
// @desc Create a Permission
// @access Public

route.post('/', Permission.New)


// @router DELETE  api/Permission/:id
// @desc Delete a Permission
// @access Public

route.delete('/:id', Permission.Delete)

// @router PUT  api/Permission/:id
// @desc Update a Permission
// @access Public
route.put('/:id', Permission.Update)

// @router GET  api/Permission
// @desc Get All Permission
// @access Public

route.get('/:id', Permission.Get)

module.exports = route