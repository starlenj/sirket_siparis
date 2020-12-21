const Semt = {
  Sube: async (parent, args, { Sube }) => {
    return await Sube.find({ _id: parent.Sube });
  },
};

module.exports = Semt;
