const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/SubeListResult');



ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/SubeListResult');


Router.post('/ChecklistReport', async (req, res) => {

    const { HeaderId } = req.body;
    var Reports = await ListHeader.find({ HeaderId });

    res.send({ Reports });
});


Router.post('/ChecklistBody', async (req, res) => {

    const { id } = req.body;
    var Reports = await ListHeader.find({ _id: id });

    res.send({ Reports });
});
module.exports = Router
