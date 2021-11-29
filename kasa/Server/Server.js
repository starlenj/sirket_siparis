const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongoose");
//set app
const app = express();
//cookieparser
const cookieParser = require("cookie-parser");
//db config
require("dotenv").config();
//connect mongo
const bcrypt = require("bcrypt");
var cors = require("cors");
var morgan = require('morgan');
var winston = require('./config/Winston');

//cookie parser middleware
app.use(cookieParser());

//cors origin
app.use(cors());

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: winston.stream }));
//cors

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// routes
app.use("/api/v2/", require("./routes/user-route"))
app.use("/api/v2/", require("./routes/auth-route"))
// DEFAULT ADMIN USER
/*
bcrypt.hash("emre0209", 10, async (err, hash) => {
  const newData = new User({
    name: "Nasuh Emre ATEŞSOY",
    lastName: "ATEŞSOY",
    email: "eatessoy@hmbrgr.com.tr",
    address: "address",
    password: hash,
    subeId: "1",
    isAdmin: true,
  });
  console.log(newData.save());
});
*/


const host = "localhost";
app.listen(process.env.PORT, () => {
  console.log(`Server started and running on http://${host}:${process.env.PORT}`)
});
