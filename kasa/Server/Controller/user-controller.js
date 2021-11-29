const { handleData, handleError, handleReponse } = require("../Helpers/Response");
const { getAll, store } = require("../services/user-sevice");
const userService = require("../services/user-sevice");

module.exports = {
  /**
   * 
   * @Params req,res
   * @Return User Model
   * 
   */

  async getAll(req, res) {
    try {
      const getAllUser = await userService.getAll();
      handleData(req, res, getAllUser);
    } catch (error) {
      handleError(req, res, error, "getAll", "user-controller");
    }
  },
  /**
   * 
   * @Params req,res
   * @Return User Model
   * 
   */
  async get(req, res) {
    try {
      const { email } = req.body;
      const getAllUser = await userService.get(email);
      handleData(req, res, getAllUser);
    } catch (error) {
      handleError(req, res, error, "getAll", "user-controller");
    }
  },
  async store(req, res) {
    try {
      const newUserService = await userService.store(req.body);
      handleData(req, res, newUserService);
    } catch (error) {
      handleError(req, res, error, "store", "user-controller");
    }
  },
  async update(req, res) {
    try {
      const newUserService = await userService.store(req.body);
      handleData(req, res, newUserService);
    } catch (error) {
      handleError(req, res, error, "store", "user-controller");
    }
  },

  async delete(req, res) {
    try {
      const deleteUser = await userService.delete(req.params.id);
      handleReponse(req, res, deleteUser, "user-controller:delete");
    } catch (error) {

    }
  }
}
