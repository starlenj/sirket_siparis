const OptionValue = {
  OptionValues: async (parent, args, { OptionValue }) => {
    return await OptionValue.find({ OptionsId: parent.id });
  },
};

module.exports = OptionValue;
