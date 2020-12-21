const Product = {
  Category: async (parent, args, { Category }) => {
    return await Category.find({ _id: parent.CategoryId });
  },
  SelectOption: async (parent, args, { SelectOptions }) => {
    return await SelectOptions.find({ ProductId: parent._id });
  },
};

module.exports = Product;
