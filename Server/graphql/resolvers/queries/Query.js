const Query = {
  ProductPrice: async (parent, { SubeId, ProductId }, { ProductPrice }) => {
    return await ProductPrice.find({ SubeId, Status: true, ProductId });
  },
  SubeServis: async (parent, { SubeId }, { SubeServis }) => {
    return await SubeServis.find({ SubeId, Status: true });
  },
  Servis: async (paret, { id }, { Servis }) => {
    return await Servis.find({});
  },
  Semt: async (paret, { id }, { Semt }) => {
    return await Semt.findById(id);
  },
  Semts: async (parent, args, { Semt }) => {
    return await Semt.find({ Status: true }).sort({ createdAt: "desc" });
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
  Permission: async (paret, { id }, { Permission }) => {
    return await Permission.findById(id);
  },
  Permissions: async (parent, args, { Permission }) => {
    return await Permission.find({ Status: 1 }).sort({ createdAt: "desc" });
  },
  Sube: async (paret, { id }, { Sube }) => {
    return await Sube.findById({ _id: id, Status: true });
  },
  Subes: async (parent, args, { Sube }) => {
    return await Sube.find({ Status: 1 }).sort({ createdAt: "desc" });
  },
  customer: async (paret, { id }, { Customer }) => {
    return await Customer.find({ id: id, status: 1 });
  },
  customers: async (parent, args, { Customer }) => {
    return await Customer.find({ status: 1 }).sort({ createdAt: "desc" });
  },
  address: async (paret, { id }, { CustomerAddress }) => {
    return await CustomerAddress.find({ id: id, status: 1 });
  },
  addresss: async (parent, args, { CustomerAddress }) => {
    return await CustomerAddress.find({ status: 1 }).sort({
      createdAt: "desc",
    });
  },
  Sepet: async (parent, { OrderHeaderId }, { Sepet }) => {
    return await Sepet.find({ OrderHeaderId }).sort({
      createdAt: "desc",
    });
  },
  SepetCustomer: async (parent, { CustomerId }, { Sepet }) => {
    return await Sepet.find({ CustomerId }).sort({
      createdAt: "desc",
    });
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
    return await Product.find({}).sort({
      Order: "desc",
    });
  },
  Product: async (parent, { id }, { Product }) => {
    let data = await Product.find({ _id: id }).sort({
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
      CategoryType: "Menü",
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
  OptionValue: async (parent, { OptionsId }, { OptionValue }) => {
    return await OptionValue.find({ OptionsId }).sort({
      createdAt: "desc",
    });
  },

  CovidHeaders: async (parent, args, { CovidFormHeader }) => {
    return await CovidFormHeader.find();
  },

  CovidHeader: async (parent, { SubeId, CreatedAt }, { CovidFormHeader }) => {
    return await CovidFormHeader.find({ SubeId: SubeId, CreatedAt: CreatedAt });
  },

  CovidAtes: async (parent, args, { CovidAtes }) => {
    return await CovidAtes.find();
  },

  CovidAtess: async (parent, { id }, { CovidAtes }) => {
    return await CovidAtes.findById(id);
  },
  CovidHijyen: async (parent, args, { CovidHijyen }) => {
    return await CovidHijyen.find();
  },

  CovidHijyens: async (parent, { id }, { CovidHijyen }) => {
    return await CovidHijyen.findById(id);
  },

  Personel: async (parent, { id }, { Personel }) => {
    return await Personel.findById(id);
  },

  Personels: async (parent, args, { Personel }) => {
    return await Personel.find();
  },
  SubePersonel: async (parent, { SubeId }, { Personel }) => {
    return await Personel.find({ SubeId: SubeId });
  },
  ArabaCategory: async (parent, args, { Category }) => {
    return await Category.find({ Status: 1, CategoryType: "ArabaSatis" }).sort({
      Order: "desc",
    });
  },
  CashierHeader: async (parent, { SubeId, CreatedAt }, { CashierHeader }) => {
    return await CashierHeader.find({ SubeId, CreatedAt, Status: 0 });
  },
  CashierHeaders: async (paret, args, { CashierHeader }) => {
    return await CashierHeader.find({ Status: 1 });
  },
};

module.exports = Query;
