module.exports = {
  CreateCovidHijyen: async (
    parent,
    { data: { HeaderId, IslemAdi, IslemDegeri, Saat } },
    { CovidHijyen }
  ) => {
    return await new CovidHijyen({
      HeaderId,
      IslemAdi,
      IslemDegeri,
      Saat,
    }).save();
  },
  UpdateCovidHijyen: async (
    parent,
    { data: { HeaderId, IslemAdi, IslemDegeri, Saat } },
    { CovidHijyen }
  ) => {
    const UpdateServis = await CovidHijyen.find({ HeaderId });
    UpdateServis.CreatedAt = CreatedAt;
    UpdateServis.IslemAdi = IslemAdi;
    UpdateServis.IslemDegeri = IslemDegeri;
    UpdateServis.Saat = Saat;
    return UpdateServis.save();
  },
  DeleteCovidHijyen: async (parent, { data: { id } }, { CovidHijyen }) => {
    const DeleteServis = await CovidHijyen.findById(id);
    DeleteServis.status = 0;
    return DeleteServis.save();
  },
};
