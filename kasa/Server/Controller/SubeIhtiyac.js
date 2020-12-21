const model = require("../models/SubeIhtiyac");
const response = require("../Helpers/Response");

module.exports = {
  async List(req, res, next) {
    const data = await model.find({});
    response.handleData(req, res, data);
  },

  async CheckData(Gun, Data, SubeId) {
    //varmı kontrol et
    const data = await model.find({
      subeId: SubeId,
      gun: Gun,
      urunAdi: Data.UrunAdi
    });
    if (data.length === 0) {
      //yeni data
      const gunData = new model({
        urunAdi: Data.UrunAdi,
        miktar: Data.Miktar,
        gun: Gun,
        subeId: SubeId
      });
      await gunData.save();
    } else {
      // güncelleme
      const UpdateData = await model.findOneAndUpdate(
        { subeId: SubeId, gun: Gun, urunAdi: Data.UrunAdi },
        {
          miktar: Data.Miktar
        },
        {
          new: true
        }
      );
      await UpdateData.save();
    }
  },

  async New(req, res, next) {
    try {
      //ana katman alınır
      const { SubeId } = req.body;
      const {
        Pazartesi,
        Sali,
        Carsamba,
        Persembe,
        Cuma,
        Cumartesi,
        Pazar
      } = req.body.data;

      //Pazartesi Check
      const PazartesiData = await model.find({
        subeId: SubeId,
        gun: "Pazartesi",
        urunAdi: Pazartesi.UrunAdi
      });
      if (PazartesiData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Pazartesi.UrunAdi,
          miktar: Pazartesi.Miktar,
          gun: "Pazartesi",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const PazartesiUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Pazartesi", urunAdi: Pazartesi.UrunAdi },
          {
            miktar: Pazartesi.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, PazartesiUpdate, "SubeIhtiyac:Update");
      }

      //Sali Check
      const SaliData = await model.find({
        subeId: SubeId,
        gun: "Salı",
        urunAdi: Sali.UrunAdi
      });
      if (SaliData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Sali.UrunAdi,
          miktar: Sali.Miktar,
          gun: "Salı",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const SaliUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Salı", urunAdi: Sali.UrunAdi },
          {
            miktar: Sali.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, SaliUpdate, "SubeIhtiyac:Update");
      }

      //Çarşamba Check
      const CarsambaData = await model.find({
        subeId: SubeId,
        gun: ":Çarşamba",
        urunAdi: Carsamba.UrunAdi
      });
      if (CarsambaData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Carsamba.UrunAdi,
          miktar: Carsamba.Miktar,
          gun: "Çarşamba",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const CarsambaUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Çarşamba", urunAdi: Carsamba.UrunAdi },
          {
            miktar: Carsamba.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, CarsambaUpdate, "SubeIhtiyac:Update");
      }
      //Perşembe Check
      const PersembeData = await model.find({
        subeId: SubeId,
        gun: "Perşembe",
        urunAdi: Persembe.UrunAdi
      });
      if (PersembeData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Persembe.UrunAdi,
          miktar: Persembe.Miktar,
          gun: "Perşembe",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const PersembeUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Perşembe", urunAdi: Persembe.UrunAdi },
          {
            miktar: Persembe.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, PersembeUpdate, "SubeIhtiyac:Update");
      }
      //Cuma Check
      const CumaData = await model.find({
        subeId: SubeId,
        gun: "Cuma",
        urunAdi: Cuma.UrunAdi
      });
      if (CumaData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Cuma.UrunAdi,
          miktar: Cuma.Miktar,
          gun: "Cuma",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const CumaUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Cuma", urunAdi: Cuma.UrunAdi },
          {
            miktar: Cuma.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, CumaUpdate, "SubeIhtiyac:Update");
      }
      //cumartesi check
      const CumartesiData = await model.find({
        subeId: SubeId,
        gun: "Cumartesi",
        urunAdi: Cumartesi.UrunAdi
      });
      if (CumartesiData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Cumartesi.UrunAdi,
          miktar: Cumartesi.Miktar,
          gun: "Cumartesi",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const CumartesiUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Cumartesi", urunAdi: Cumartesi.UrunAdi },
          {
            miktar: Cumartesi.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, CumartesiUpdate, "SubeIhtiyac:Update");
      }
      //pazar check
      const PazarData = await model.find({
        subeId: SubeId,
        gun: "Pazar",
        urunAdi: Pazar.UrunAdi
      });
      if (PazarData.length === 0) {
        //yeni data
        const gunData = new model({
          urunAdi: Pazar.UrunAdi,
          miktar: Pazar.Miktar,
          gun: "Pazar",
          subeId: SubeId
        });
        let resp = await gunData.save();
        response.handleReponse(req, res, resp, "SubeIhtiyac:Create");
      } else {
        // güncelleme
        const PazarUpdate = await model.findOneAndUpdate(
          { subeId: SubeId, gun: "Pazar", urunAdi: Pazar.UrunAdi },
          {
            miktar: Pazar.Miktar
          },
          {
            new: true
          }
        );
        response.handleReponse(req, res, PazarUpdate, "SubeIhtiyac:Update");
      }
    } catch (error) {
      response.handleError(req, res, error, "Create", "SubeIhtiyac");
    }
  },
  async GetReportData(req, res) {
    try {
      const { Gun } = req.body;
      const deleteData = await model
        .aggregate()
        .match({ gun: Gun })
        .group({
          _id: "$urunAdi",
          miktar: { $sum: "$miktar" }
        });

      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetReportData", "SubeIhtiyac");
    }
  },
  async Get(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.find({ subeId: id });
      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetSubeIhtiyac", "SubeIhtiyac");
    }
  },
  async GetSubeReport(req, res) {
    try {
      const { gun, subeId } = req.body;
      const deleteData = await model.find({
        gun: gun,
        subeId: subeId
      });
      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetSubeReport", "SubeIhtiyac");
    }
  }
};
