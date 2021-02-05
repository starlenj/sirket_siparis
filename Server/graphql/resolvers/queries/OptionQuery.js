const OptionValue = {
  OptionValues: async (parent, args, { OptionValue }) => {
    return await OptionValue.find({ OptionsId: parent.id, Status: 1 });
  },
};

module.exports = OptionValue;
