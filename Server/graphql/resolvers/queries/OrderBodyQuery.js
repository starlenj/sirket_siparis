const OrderBody = {
  SelectOrderOption: async (parent, args, { SelectOrderOptions }) => {
    return await SelectOrderOptions.find({ OrderBodyId: parent._id });
  },
  Product: async (parent, args, { Product }) => {
    return await Product.find({ _id: parent.ProductId });
  }
};

module.exports = OrderBody;
