const Options = {
  Options: async (parent, args, { Option }) => {
    return await Option.find({ _id: parent.OptionsId }).sort({ Order: -1 });
  }
};

module.exports = Options;
