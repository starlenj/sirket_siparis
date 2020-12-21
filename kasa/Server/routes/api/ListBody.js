const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/listValue');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/ListBody');
Router.post('/GetListBody', async (req, res) => {
  var id = req.body.id;
  var data = await ListHeader.find({ headerId: id });
  res.send({ data });
});


module.exports = Router
