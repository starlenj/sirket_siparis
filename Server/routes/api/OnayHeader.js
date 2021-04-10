const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/OnayHeader');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/OnayHeader');

Router.post('/GetOnayList', async (req, res) => {
    const { type } = req.body;
    let response = await ListHeader.find({ type });
    res.send({ Result: response });
})
module.exports = Router
