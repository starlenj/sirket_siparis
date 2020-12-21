const Category = {
  Products: async (parent, args, { Product }) => {
    return await Product.find({ CategoryId: parent.id, Status: 1 });
  },
};

module.exports = Category;
