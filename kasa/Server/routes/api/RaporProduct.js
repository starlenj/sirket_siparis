const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/RaporProduct');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/RaporProduct');

module.exports = Router