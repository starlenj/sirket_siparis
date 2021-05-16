const Express = require('express');
const Router = Express.Router();



const ListHeader = require('../../models/CodeHareket');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/CodeHareket');
Router.get("/GetHareket/:code", async (req, res) => {
    const { code } = req.params;
    const response = await ListHeader.find({ code });
    res.send({ response });
});
module.exports = Router