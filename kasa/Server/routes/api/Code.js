
const Router = Express.Router();
const UUID = require("uuid")


const ListHeader = require('../../models/Code');


ListHeader.methods(['get', 'post', 'put', 'delete']);
ListHeader.register(Router, '/Code');
Router.get("/GenerateCode", async (req, res) => {
    try {
        const code = UUID.v4();
        res.send({ code });
    } catch (error) {

    }

});
Router.get("/GetCode/:name", async (req, res) => {
    const response = await ListHeader.find({ name: req.params.name });
    res.send(response);
})
module.exports = Router
