const SelectOrderOptions = {
  OrderOptions: async (parent, args, { OptionValue }) => {
    return await OptionValue.find({ _id: parent.OptionsId });
  },

};

module.exports = SelectOrderOptions;
