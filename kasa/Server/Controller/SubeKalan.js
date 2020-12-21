const model = require("../models/SubeKalan");
const response = require("../Helpers/Response");
const moment = require("moment");
module.exports = {
  async List(req, res, next) {
    const data = await model.find({});
    response.handleData(req, res, data);
  },
  async New(req, res, next) {
    try {
      //ana katman alınır
      const { SubeId } = req.body;
      const { Pazartesi } = req.body.data;

      //yeni data
      const gunData = new model({
        urunAdi: Pazartesi.UrunAdi,
        miktar: Pazartesi.Miktar,
        gun: "Pazartesi",
        subeId: SubeId,
        tarih: Pazartesi.Tarih
      });
      let resp = await gunData.save();
      response.handleReponse(req, res, resp, "SubeKalan:Create");
    } catch (error) {
      response.handleError(req, res, error, "Create", "SubeKalan");
    }
  },

  async Update(req, res, next) {
    try {
      const { id ,miktar} = req.params;
     
      const updateData = await model.findById(id);
      updateData.miktar = miktar;
      const resp = await updateData.save();
      response.handleReponse(req, res, resp, "SubeKalan:Update");
    } catch (error) {
      response.handleError(req, res, error, "Update", "SubeKalan");
    }
  },
  async Delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.findById(id);
      const resp = await deleteData.remove();
      response.handleReponse(req, res, resp, "SubeKalan:Delete");
    } catch (error) {
      response.handleError(req, res, error, "Delete", "SubeKalan");
    }
  },
  async GetSepet(req, res, next) {
    try {
      const { date, subeId, orderState } = req.body;
      const deleteData = await model.find({
        created_at: date,
        hedefSube: subeId,
        status: orderState
      });

      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "Get", "SubeKalan");
    }
  },
  async Get(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.find({ subeId: id });
      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetSubeKalan", "Sepet");
    }
  },
  async GetReportData(req, res) {
    try {
      const {startDate,finishDate}  =req.body
      const deleteData = await model.find({
        tarih: startDate,
       
      });
         
       response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetReportData", "SubeKalan");
    }
  },
  async GetDetail(req, res) {
    try {
      const { startDate, finishDate, subeId } = req.body;
      const deleteData = await model.find({
        tarih: { $gte: startDate, $lte: finishDate },
        subeId: subeId
      });
      
      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetReportData", "SubeKalan");
    }
  },
  async GetSubeReport(req, res) {
    try {
      const { startDate, subeId } = req.body;
      const deleteData = await model.find({
        tarih: startDate,
        subeId: subeId
      });
      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "GetSubeReport", "SubeKalan");
    }
  }
};
