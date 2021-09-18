const express = require("express");
require("dotenv").config();
const http = require("http");
const { ApolloServer, PubSub } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const mongoose = require("mongoose");
const resolvers = require("./graphql/resolvers/index");
const jwt = require("jsonwebtoken");
const cors = require("cors");
//models
const User = require("./models/User");
const OrderHeader = require("./models/OrderHeader");
const OrderBody = require("./models/Order");
const Product = require("./models/Product");
const Option = require("./models/Options");
const Category = require("./models/Category");
const SelectOptions = require("./models/SelectOptions");
const SelectOrderOptions = require("./models/SelectOrderOptions");
const OptionValue = require("./models/OptionsValue");
const Bolge = require("./models/Bolge");
const Sube = require("./models/Sube");
const bodyParser = require("body-parser");
const PubSubServer = new PubSub();
const waitingOrder = require("./helpers/waitingOrders.js").main();
//server
const Server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: ({ req }) => ({
    User,
    OrderHeader,
    OrderBody,
    Product,
    Option,
    Category,
    SelectOptions,
    SelectOrderOptions,
    OptionValue,
    Bolge,
    Sube,
    PubSubServer,
    ActiveUser: req ? req.ActiveUser : null,
  }),
});
mongoose
  .connect(process.env.DB_HOST)
  .then(() => console.log("MONGO CONNECT"))
  .catch((error) => console.error("MONGO DB ERROR",error));
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//SMS API
app.use(cors());
app.use("/Api", require("./route/sms"));
app.use("/Api", require("./route/Api/Bolgeler"));
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token && token !== "null") {
    try {
      const ActiveUser = await jwt.verify(token, process.env.secret);
      req.ActiveUser = ActiveUser;
    } catch (e) {
      console.error(e);
      req.ActiveUser = null;
    }
  }
  next();
});
Server.applyMiddleware({ app });

const httpServer = http.createServer(app);
Server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, async () => {
  //ADMIN AÇILACAK

  /* const user = await User.findOne({ Email });
  if (!user) {
    const newUser = await new User({
      Email: "eatessoy@hmbrgr.com.tr",
      Sube: "merkez",
      Password: "emre0209",
      Name: "Nasuh Emre",
    }).save();
  }*/
  console.log("Server Ready User is Created");
});
