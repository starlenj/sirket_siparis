const OrderHeader = require("./OrderHeader");
const SubeStatus = require("./SubeStatus");
const ProductStatus = require("./Product");

const Subscription = {
  ...OrderHeader,
  ...SubeStatus,
  ...ProductStatus,
};

module.exports = Subscription;
