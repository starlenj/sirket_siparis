const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/SubeListHeader');



ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/SubeListHeader');

Router.post('/SubeListHeaderReport', async (req, res) => {
    const { SubeId, Tarih } = req.body;
    const Report = await ListHeader.find({ SubeId, Date: Tarih })
    res.send({ Report });
})
module.exports = Router
