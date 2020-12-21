const UserMutation = require("./user.mutation");
const SubeMutation = require("./sube.mutation");
const PermissionMutation = require("./permission.mutation");
const CustomerMutation = require("./customer.mutation");
const CustomerAdressMutation = require("./address.mutation");
const SepetMutation = require("./sepet.mutation");
const OrderHeaderMutation = require("./orderheader.mutation");
const OrderBodyMutation = require("./orderbody.mutation");
const ProductMutatiton = require("./product.mutation");
const CategoryMutation = require("./category.mutation");
const OptionMutation = require("./options.mutation");
const SelectOptionMutation = require("./selectoption.mutation");
const CalismaSaatleri = require("./calismasaatleri.mutation");
const PaymentType = require("./paymenttype.mutation");
const Servis = require("./servis.mutation");
const OrderType = require("./ordertype.mutation");
const SelectOrderOptions = require("./selectorderoptions.mutation");
const OptionValue = require("./optionvalue.mutation");
const CovidFormHeader = require("./covidformheader.mutation");
const CovidAtes = require("./covidates.mutation");
const CovidHijyen = require("./covidhijyen.mutation");
const Personel = require("./personel.mutation");
const Semt = require("./semt.mutation");
const SubeServis = require("./subeservis.mutation");
const ProductPrice = require("./productprice.mutation");

module.exports = {
  ...UserMutation,
  ...SubeMutation,
  ...PermissionMutation,
  ...CustomerMutation,
  ...CustomerAdressMutation,
  ...SepetMutation,
  ...OrderHeaderMutation,
  ...OrderBodyMutation,
  ...ProductMutatiton,
  ...CategoryMutation,
  ...OptionMutation,
  ...SelectOptionMutation,
  ...CalismaSaatleri,
  ...PaymentType,
  ...Servis,
  ...OrderType,
  ...SelectOrderOptions,
  ...OptionValue,
  ...CovidFormHeader,
  ...CovidAtes,
  ...CovidHijyen,
  ...Personel,
  ...Semt,
  ...SubeServis,
  ...ProductPrice,
};
