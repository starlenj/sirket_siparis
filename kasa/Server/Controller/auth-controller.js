const { handleData, handleError, handleReponse } = require("../Helpers/Response");
const { getAll, store } = require("../services/user-sevice");
const userService = require("../services/user-sevice");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");


module.exports = {


  /**
   * 
   * @Params req,res
   * @Return User Model
   * 
   */
  async Login(req, res) {
    try {
      const { email, password } = req.body;
      const expirationSeconds = 60 * 60 * 24 * 7; // one week
      let user = await userService.get(email);
      if (user.length === 0) {
        handleError(req, res, "Kullanici Bulunamadi", "Login", "auth-controller");
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      console.log(isValidPassword)
      if (!isValidPassword) {
        handleError(req, res, "Sifre Hatali", "Login", "auth-controller");
      }
      const token = jsonwebtoken.sign({
        id: user.id,
        email: user.email,
        sube_id: user.sube_id,
      }, process.env.secret, { expiresIn: expirationSeconds });
      handleData(req, res, token);
    } catch (error) {
      console.log(error)

    }
  }

}
