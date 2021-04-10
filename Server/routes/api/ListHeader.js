const Express = require('express');
const Router =Express.Router();



const ListHeader = require('../../models/listHeadear');


ListHeader.methods([ 'get','post','put','delete' ]);
ListHeader.register(Router,'/ListHeader');

module.exports=Router
