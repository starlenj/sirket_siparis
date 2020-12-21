const  expres = require('express')
const route = expres.Router()
const Product = require('../../Controller/UserPermission')

// @router GET  api/Product
// @desc Get All Product
// @access Public

route.get('/',Product.List)


// @router POST  api/Product
// @desc Create a Product
// @access Public

route.post('/',Product.New)


// @router DELETE  api/Product/:id
// @desc Delete a Product
// @access Public

route.delete('/:id',Product.Delete)

// @router PUT  api/Product/:id
// @desc Update a Product
// @access Public
route.put('/:id',Product.Update)

// @router GET  api/Product
// @desc Get All Product
// @access Public

route.get('/:id',Product.Get)
route.post('/getUserPermission',Product.GetUserPermission)
module.exports = route