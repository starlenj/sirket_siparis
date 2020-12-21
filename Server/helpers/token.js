const jwt = require("jsonwebtoken");
const token = {
  generate: (user, expiresIn) => {
    return jwt.sign({ user }, process.env.secret, { expiresIn });
  },
};
module.exports = token;
