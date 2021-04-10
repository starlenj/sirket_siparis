const  expres = require('express')
const route = expres.Router()
const Users = require('../../Controller/User')

// @router GET  api/users
// @desc Get All Users
// @access Public

route.get('/',Users.List)


// @router GET  api/users
// @desc Get Only Select User
// @access Public

route.get('/:id',Users.Get)

// @router POST  api/users
// @desc Create a User
// @access Public

route.post('/',Users.New)


// @router DELETE  api/users/:id
// @desc Delete a User
// @access Public

route.delete('/:id',Users.Delete)
// @router PUT  api/logout
// @desc Update  User
// @access Public
route.put('/:id',Users.Update)
module.exports = route
