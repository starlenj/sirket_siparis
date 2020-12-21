const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/OnayBody');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/OnayBody');

Router.post('/OnayUserList', async (req, res) => {
    const { headerId, } = req.body;
    let response = await ListHeader.find({ headerId });
    res.send({ Result: response });
})

module.exports = Router
