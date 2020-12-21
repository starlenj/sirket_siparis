const SubeServis = {
  Sube: async (parent, args, { Sube }) => {
    return await Sube.find({ _id: parent.SubeId });
  },
};

module.exports = SubeServis;
