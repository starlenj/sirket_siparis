const OptionCategory = {
  OptionsHeader: async (parent, args, { Option }) => {
    console.log(parent.OptionsId)
    return await Option.find({ _id: parent.OptionsId });
  }
};

module.exports = OptionCategory;
