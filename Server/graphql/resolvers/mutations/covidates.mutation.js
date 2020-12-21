module.exports = {
  CreateCovidAtes: async (
    parent,
    { data: { HeaderId, PersonelId, Ates, Saat } },
    { CovidAtes }
  ) => {
    return await new CovidAtes({
      HeaderId,
      PersonelId,
      Ates,
      Saat,
    }).save();
  },
  UpdateCovidAtes: async (
    parent,
    { data: { HeaderId, PersonelId, Ates, Saat } },
    { CovidAtes }
  ) => {
    const UpdateServis = await CovidAtes.find({ HeaderId });
    UpdateServis.CreatedAt = CreatedAt;
    UpdateServis.PersonelId = PersonelId;
    UpdateServis.Ates = Ates;
    UpdateServis.Saat = Saat;
    return UpdateServis.save();
  },
  DeleteCovidAtes: async (parent, { data: { id } }, { CovidAtes }) => {
    const DeleteServis = await CovidAtes.findById(id);
    DeleteServis.status = 0;
    return DeleteServis.save();
  },
};
