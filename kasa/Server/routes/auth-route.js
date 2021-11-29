const  expres = require('express')
const route = expres.Router()
const authController = require('../Controller/auth-controller');

route.post("/auth/login" , authController.Login);

module.exports = route;

