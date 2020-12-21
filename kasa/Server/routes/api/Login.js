const jwt = require("jsonwebtoken");
const express = require("express");
const route = express.Router();
const User = require("../../models/User.js");
const bcrypt = require("bcrypt");
// @router GET api/user/login
// @desc User Login
// @access Public

route.post("/", (req, res, next) => {
  const { email, password } = req.body;

  User.find({ email }).then((users) => {
    if (users.length > 0) {
      //user exist check password
      const validPassword = checkPassword(users[0].password, password);
      if (validPassword) {
        //get permissions
        const token = jwt.sign({ data: users }, process.env.SECRET, {
          expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
        });

        res
          .status(200)
          .send({
            success: true,
            status: 200,
            token,
            email: users[0].email,
            id: users[0]._id,
            subeId: users[0].subeId,
          });
      } else {
        res.send({ success: false, msg: "Kullanıcı Bulunamadı", status: 403 });
      }
    } else {
      //password error
      res.send({ success: false, msg: "Şifre Hatalı", status: 403 });
    }
  });
});
route.post("/validToken", checkToken);

function checkToken(req, res, next) {
  const { token } = req.body;
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      res
        .status(403)
        .send({ success: false, status: 403, msg: "Invalid Token" });
    } else {
      res.status(200).send({ success: true, status: 200, data: decoded });
    }
  });
}

function checkPassword(hash, password) {
  const isValid = bcrypt.compareSync(password, hash);
  return isValid;
}

module.exports = route;
