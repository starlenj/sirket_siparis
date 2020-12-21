const Sube = {
  Servis: async (parent, { data: { id } }, { Servis }) => {
    return await Servis.find({ SubeId: id });
  },
};

module.exports = Sube;
