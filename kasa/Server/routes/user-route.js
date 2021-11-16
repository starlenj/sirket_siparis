const  expres = require('express')
const route = expres.Router()
const userController = require('../Controller/user-controller');

route.get("/user/getAll" , userController.getAll);
route.post("/user/store" , userController.store);

module.exports = route;