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
const Sube = require("./models/Sube");
const Personel = require("./models/Personel");
const Permission = require("./models/Permissions");
const Customer = require("./models/Customer");
const CustomerAddress = require("./models/CustomerAdress");
const Sepet = require("./models/Sepet");
const OrderHeader = require("./models/OrderHeader");
const OrderBody = require("./models/Order");
const Product = require("./models/Product");
const Option = require("./models/Options");
const Category = require("./models/Category");
const CalismaSaatleri = require("./models/CalismaSaatleri");
const PaymentType = require("./models/PaymentType");
const OrderType = require("./models/OrderType");
const Servis = require("./models/Servis");
const SelectOptions = require("./models/SelectOptions");
const SelectOrderOptions = require("./models/SelectOrderOptions");
const OptionValue = require("./models/OptionsValue");
const CovidFormHeader = require("./models/CovidFormHeader");
const CovidAtes = require("./models/CovidAtes");
const CovidHijyen = require("./models/CovidHijyen");
const Semt = require("./models/Semt");
const SubeServis = require("./models/SubeServis");
const ProductPrice = require("./models/ProductPrice");
const bodyParser = require("body-parser");
const PubSubServer = new PubSub();
const waitingOrder = require("./helpers/waitingOrders.js").main();
//server
const Server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: ({ req }) => ({
    User,
    Sube,
    Personel,
    Permission,
    Customer,
    CustomerAddress,
    Sepet,
    OrderHeader,
    OrderBody,
    Product,
    Option,
    Category,
    CalismaSaatleri,
    PaymentType,
    OrderType,
    Servis,
    SelectOptions,
    SelectOrderOptions,
    CovidFormHeader,
    CovidHijyen,
    CovidAtes,
    OptionValue,
    SubeServis,
    Semt,
    PubSubServer,
    ProductPrice,
    ActiveUser: req ? req.ActiveUser : null,
  }),
});
mongoose
  .connect(process.env.DB_HOST)
  .then(() => console.log("MONGO CONNECT"))
  .catch(() => console.error("MONGO DB ERROR"));
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//SMS API
app.use(cors());
app.use("/Api", require("./route/sms"));
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
