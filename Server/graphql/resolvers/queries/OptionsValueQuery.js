const OptionCategory = {
  OptionsHeader: async (parent, args, { Option }) => {
    return await Option.find({ _id: parent.OptionsId, Status: 1 });
  }
};

module.exports = OptionCategory;
