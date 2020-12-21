const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/OnayList');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/OnayList');

Router.post('/GetUserOnayList', async (req, res) => {
    const { UserId } = req.body;

    let response = await ListHeader.find({ UserId, Status: false });
    res.send({ Result: response });

});

Router.post('/Onaylama', async (req, res) => {
    const { headerId } = req.body;
    let update = await ListHeader.findOne({ _id: headerId });
    update.Status = true;
    let resulst = await update.save();
    res.send({ Result: resulst });
})
module.exports = Router
