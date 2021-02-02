const Query = require("./queries/Query");
const User = require("./queries/UserQuery");
const OrderHeader = require("./queries/OrderQuery");
const SelectOption = require("./queries/SelectOptionsQuery");
const Customer = require("./queries/CustomerQuery");
const Product = require("./queries/ProductQuery");
const Mutation = require("./mutations/index");
const Sepet = require("./queries/SepetQuery");
const OrderBody = require("./queries/OrderBodyQuery");
const SelectOrderOptions = require("./queries/SelectOrderOptionsQuery");
const Sube = require("./queries/SubeQuery");
const Category = require("./queries/CategoryQuery");
const Option = require("./queries/OptionQuery");
const Subscription = require("./subscriptions/index");
const CovidFormHeader = require("./queries/CovidHeaderQuery");
const CovidAtes = require("./queries/CovidAtesQuery");
const CashierHeader = require("./queries/CashierHeaderQuery");
const Servis = require("./queries/ServisQuery");
const SubeServis = require("./queries/SubeServisQuery");
const OptionValue = require("./queries/OptionsValueQuery");
module.exports = {
  Query,
  User,
  Product,
  OrderHeader,
  Customer,
  SelectOption,
  Sepet,
  OrderBody,
  SelectOrderOptions,
  Sube,
  Category,
  Mutation,
  Option,
  CovidFormHeader,
  Subscription,
  CovidAtes,
  CashierHeader,
  Servis,
  SubeServis,
  OptionValue
};
