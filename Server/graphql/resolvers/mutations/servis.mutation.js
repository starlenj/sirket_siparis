module.exports = {
  CreateServis: async (
    parent,
    { data: { Semt, ServisBedeli, MinimumTutar, SubeId } },
    { Servis }
  ) => {
    return await new Servis({
      Semt,
      ServisBedeli,
      MinimumTutar,
      SubeId,
    }).save();
  },
  UpdateServis: async (
    parent,
    { data: { Semt, ServisBedeli, MinimumTutar, SubeId, id } },
    { Servis }
  ) => {
    const UpdateServis = await Servis.findById(id);
    UpdateServis.Semt = Semt;
    UpdateServis.ServisBedeli = ServisBedeli;
    UpdateServis.MinimumTutar = MinimumTutar;
    UpdateServis.SubeId = SubeId;
    return UpdateServis.save();
  },
  DeleteServis: async (parent, { data: { id } }, { Servis }) => {
    const DeleteServis = await Servis.findById(id);
    DeleteServis.Status = 0;
    return DeleteServis.save();
  },
};
