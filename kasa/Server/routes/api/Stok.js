
const Express = require('express');
const Router = Express.Router();

const ListHeader = require('../../models/stok');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/Stok');

module.exports = Router
