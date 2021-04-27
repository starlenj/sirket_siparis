const UserMutation = require("./user.mutation");
const OrderHeaderMutation = require("./orderheader.mutation");
const OrderBodyMutation = require("./orderbody.mutation");
const ProductMutatiton = require("./product.mutation");
const CategoryMutation = require("./category.mutation");
const OptionMutation = require("./options.mutation");
const SelectOptionMutation = require("./selectoption.mutation");
const SelectOrderOptions = require("./selectorderoptions.mutation");
const OptionValue = require("./optionvalue.mutation");
const Bolge = require("./bolge.mutation.js");

module.exports = {
  ...UserMutation,
  ...OrderHeaderMutation,
  ...OrderBodyMutation,
  ...ProductMutatiton,
  ...CategoryMutation,
  ...OptionMutation,
  ...SelectOptionMutation,
  ...SelectOrderOptions,
  ...OptionValue,
  ...Bolge,
};
