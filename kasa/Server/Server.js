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
var User = require("./models/User");
mongo
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo db connected"))
  .catch((err) => console.log(err));

//cookie parser middleware
app.use(cookieParser());

//cors origin
app.use(cors());

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
app.use("/api/v1/users", require("./routes/api/User.js"));
app.use("/api/v1/Users/login", require("./routes/api/Login.js"));
app.use("/api/v1/users/permission", require("./routes/api/Permission.js"));
app.use(
  "/api/v1/users/UserPermission",
  require("./routes/api/Permission.js")
);
app.use("/api/v1/sube", require("./routes/api/Sube.js"));
app.use("/api/v1/shopReport", require("./routes/api/ShopReport.js"));
//app start
app.use(
  "/api/v1/shopReportView",
  require("./routes/api/ShopReportView.js")
);
app.use("/api/v1/", require("./routes/api/ListHeader"));
app.use("/api/v1/", require("./routes/api/ListBody"));
app.use("/api/v1/", require("./routes/api/SubeResult"));
app.use("/api/v1/", require("./routes/api/SubeHeader"));
app.use("/api/v1/", require("./routes/api/OnayHeader"));
app.use("/api/v1/", require("./routes/api/OnayList"));
app.use("/api/v1/", require("./routes/api/Onaybody"));
app.use("/api/v1/", require("./routes/api/Mail"));
app.use("/api/v1/", require("./routes/api/Stok"));
app.use("/api/v1/vega", require("./routes/api/Vega"));
app.use("/api/v1/Zirve", require("./routes/api/Zirve"));

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
app.listen(process.env.PORT, () => {
  console.log("SERVER STARTED", process.env.PORT);
});
