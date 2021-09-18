module.exports = {
  CreateBolge: async (
    parent,
    { data: { BolgeAdi, Sehir, SubeId, Tutar } },
    { Bolge }
  ) => {
    return await new Bolge({
      BolgeAdi,
      Sehir,
      SubeId,
      Tutar,
    }).save();
  },
  UpdateBolge: async (
    parent,
    { data: { BolgeAdi, Sehir, Tutar, id } },
    { Bolge }
  ) => {
    const UpdateData = await Bolge.findById(id);
    UpdateData.BolgeAdi = BolgeAdi;
    UpdateData.Sehir = Sehir;
    UpdateData.Tutar = Tutar;
    return UpdateData.save();
  },
  DeleteBolge: async (parent, { data: { id } }, { Bolge }) => {
    const UpdateData = await Bolge.findById(id);
    UpdateData.Status = 0;
    return UpdateData.save();
  },
  BolgeStatus: async (parent, { data: { id, Status } }, { Bolge }) => {
    const UpdateData = await Bolge.findById(id);
    UpdateData.Status = Status;
    return UpdateData.save();
  },
};
