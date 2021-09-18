const Express = require("express");
const Router = Express.Router();
const ListHeader = require("../../models/Bolge");

ListHeader.methods(["get", "post", "put", "delete"]);
ListHeader.register(Router, "/Bolge");
Router.post("GetSehirBolge", async (req, res) => {
  let response = await ListHeader.find({ Sehir: req.body.Sehir });
  res.send(response);
});
module.exports = Router;
