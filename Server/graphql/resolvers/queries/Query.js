const Query = {
  Sube: async (paret, { id }, { Sube }) => {
    return await Sube.findById(id);
  },
  Subes: async (parent, args, { Sube }) => {
    return await Sube.find({}).sort({ createdAt: "desc" });
  },
  User: async (paret, { id }, { User }) => {
    return await User.findById(id);
  },
  Users: async (parent, args, { User }) => {
    return await User.find({}).sort({ createdAt: "desc" });
  },
  ActiveUser: async (parent, args, { ActiveUser, User, Customer }) => {
    if (!ActiveUser) {
      return null;
    }
    const user = await User.findOne({ Email: ActiveUser.user.Email });
    if (!user) {
      return await Customer.findOne({ Email: ActiveUser.user.Email });
    } else {
      return user;
    }
  },
  orderBody: async (parent, { OrderHeaderId }, { OrderBody }) => {
    return await OrderBody.find({ OrderHeaderId }).sort({
      createdAt: "desc",
    });
  },
  orderBodys: async (parent, args, { OrderBody }) => {
    return await OrderBody.find({}).sort({
      createdAt: "desc",
    });
  },
  Orders: async (parent, args, { OrderHeader }) => {
    return await OrderHeader.find({}).sort({
      createdAt: "desc",
    });
  },
  OdemeOrders: async (parent, { PaymentType }, { OrderHeader }) => {
    return await OrderHeader.find({ PaymentType }).sort({
      createdAt: "desc",
    });
  },
  Order: async (parent, { id }, { OrderHeader }) => {
    return await OrderHeader.findById({ _id: id }).sort({
      createdAt: "desc",
    });
  },
  OnaysizOrders: async (parent, { SubeId }, { OrderHeader }) => {
    return await OrderHeader.find({ OrderStatus: 0, SubeId: SubeId }).sort({
      createdAt: "asc",
    });
  },
  OnayliOrders: async (parent, { SubeId }, { OrderHeader }) => {
    return await OrderHeader.find({ SubeId: SubeId }).sort({
      createdAt: "asc",
    });
  },
  Products: async (parent, args, { Product }) => {
    return await Product.find({ Status: 1 }).sort({
      Order: "desc",
    });
  },
  Product: async (parent, { id }, { Product }) => {
    let data = await Product.find({ _id: id, Status: 1 }).sort({
      Order: "desc",
    });
    return data[0];
  },

  Options: async (parent, args, { Option }) => {
    return await Option.find({ Status: 1 }).sort({
      createdAt: "desc",
    });
  },
  Option: async (parent, { id }, { Option }) => {
    return await Option.findById({ id, Status: 1 }).sort({
      createdAt: "desc",
    });
  },

  Categorys: async (parent, args, { Category }) => {
    return await Category.find({
      Status: 1,
    }).sort({
      Order: "desc",
    });
  },
  Category: async (parent, { id }, { Category }) => {
    return await Category.findById({
      id,
      status: 1,
      CategoryType: "Menü",
    }).sort({ Order: "desc" });
  },
  ProductSelectOption: async (parent, { ProductId }, { SelectOptions }) => {
    return await SelectOptions.find({ ProductId: ProductId, Status: 1 });
  },

  OptionValues: async (parent, args, { OptionValue }) => {
    return await OptionValue.find({ Status: 1 }).sort({
      createdAt: "desc",
    });
  },
  OptionValue: async (parent, { OptionsId }, { OptionValue }) => {
    return await OptionValue.find({ OptionsId }).sort({
      createdAt: "desc",
    });
  },
  ArabaCategory: async (parent, args, { Category }) => {
    return await Category.find({ Status: 1, CategoryType: "ArabaSatis" }).sort({
      Order: "desc",
    });
  },
  Bolge: async (parent, { SubeId }, { Bolge }) => {
    return await Bolge.find({ SubeId, Status: 1 });
  },
  Bolges: async (paret, args, { Bolge }) => {
    return await Bolge.find({ Status: 1 });
  },
  SubeBolge: async (paret, { SubeId }, { Bolge }) => {
    return await Bolge.find({ SubeId });
  },
  SehirBolge: async (paret, { Sehir }, { Bolge }) => {
    return await Bolge.find({ Sehir });
  },
  GetMenu: async (parent, args, { Category }) => {
    return await Category.find({
      Status: 1,
      CategoryType: args.CategoryType,
    }).sort({
      Order: "desc",
    });
  },
};

module.exports = Query;
