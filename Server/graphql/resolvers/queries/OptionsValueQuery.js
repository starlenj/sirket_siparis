const OptionCategory = {
  Options: async (parent, args, { Option }) => {
    return await Option.find({ OptionCategoryId: parent.id, status: 1 });
  },
};

module.exports = OptionCategory;
