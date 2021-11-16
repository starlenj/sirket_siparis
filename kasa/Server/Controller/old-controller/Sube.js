const model = require("../models/Sube");
const response = require("../Helpers/Response");
module.exports = {
  async List(req, res, next) {
    const data = await model.find({});
    response.handleData(req, res, data);
  },
  async New(req, res, next) {
    try {
      const { Order, name, host, password, username, dbname, port } = req.body;
      const newData = new model({
        Order,
        name,
        host,
        password,
        username,
        dbname,
        port,
        depoId: 100,
      });
      const resp = await newData.save();
      response.handleReponse(req, res, resp, "Sube:Create");
    } catch (error) {
      response.handleError(req, res, error, "Create", "Sube");
    }
  },
  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        Order,
        name,
        host,
        password,
        username,
        dbname,
        port,
        depoId,
      } = req.body;
      const updateData = await model.findById(id);
      updateData.name = name;
      updateData.lastNamehost = host;
      updateData.username = username;
      updateData.dbname = dbname;
      updateData.port = port;
      updateData.password = password;
      updateData.host = host;
      updateData.depoId = depoId;
      updateData.Order = Order;
      const resp = await updateData.save();
      response.handleReponse(req, res, resp, "Sube:Update");
    } catch (error) {
      response.handleError(req, res, error, "Update", "Sube");
    }
  },
  async Delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.findById(id);
      const resp = await deleteData.remove();
      response.handleReponse(req, res, resp, "Sube:Delete");
    } catch (error) {
      response.handleError(req, res, error, "Delete", "Sube");
    }
  },
  async Get(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.findById(id);

      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "Get", "Sube");
    }
  },
};
