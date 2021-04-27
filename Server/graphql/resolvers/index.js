const Query = require("./queries/Query");
const OrderHeader = require("./queries/OrderQuery");
const SelectOption = require("./queries/SelectOptionsQuery");
const Product = require("./queries/ProductQuery");
const Mutation = require("./mutations/index");
const OrderBody = require("./queries/OrderBodyQuery");
const SelectOrderOptions = require("./queries/SelectOrderOptionsQuery");
const Category = require("./queries/CategoryQuery");
const Option = require("./queries/OptionQuery");
const Subscription = require("./subscriptions/index");
const OptionValue = require("./queries/OptionsValueQuery");
module.exports = {
  Query,
  Product,
  OrderHeader,
  SelectOption,
  OrderBody,
  SelectOrderOptions,
  Category,
  Mutation,
  Option,
  Subscription,
  OptionValue
};
