const CovidFormHeader = {
  CovidAtesList: async (parent, args, { CovidAtes }) => {
    console.log(parent);
    return await CovidAtes.find({ HeaderId: parent._id });
  },
  CovidHijyenList: async (parent, args, { CovidHijyen }) => {
    return await CovidHijyen.find({ HeaderId: parent.id });
  },
};

module.exports = CovidFormHeader;
