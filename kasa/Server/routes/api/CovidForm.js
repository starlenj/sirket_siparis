const expres = require("express");
const route = expres.Router();
const ShopReport = require("../../Controller/CovidController");
route.post("/", ShopReport.New);
route.put("/:id", ShopReport.Update);
route.post("/CheckReport", ShopReport.CheckReport);
route.post("/GetReport", ShopReport.Get);
module.exports = route;
