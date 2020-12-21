const CovidAtes = {
  PersonelList: async (parent, args, { Personel }) => {
    console.log(parent);
    return await Personel.find({ _id: parent.PersonelId });
  },
};

module.exports = CovidAtes;
