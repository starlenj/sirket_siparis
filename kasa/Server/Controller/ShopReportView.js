const model = require("../models/ShopReportView");
const response = require("../Helpers/Response");

module.exports = {
  async List(req, res, next) {
    const data = await model.find({ status: 0 });
    response.handleData(req, res, data);
  },
  async New(req, res, next) {
    try {
      var {
        subeId,
        userId,
        cash,
        credit,
        ticket,
        sodexo,
        armada,
        multinet,
        setcard,
        created_at,
        masraf,
        setCardGunSonu,
        multinetGunSonu,
        metropolGunSonu,
        ceoCardGunSonu,
        avmKuponu,
        ticketGunSonu,
        sodexoGunSonu,
        sinemaBileti,
        yemekSepeti,
        iade,
      } = req.body;

      //ticket valid
      if (ticket.bir === "") {
        ticket.bir = 0;
      }
      if (ticket.sifirbes === "") {
        ticket.sifirbes = 0;
      }
      if (ticket.sifiryirmibes === "") {
        ticket.sifiryirmibes = 0;
      }
      if (ticket.sifirbir === "") {
        ticket.sifirbir = 0;
      }
      if (ticket.sifirsifirbes === "") {
        ticket.sifirsifirbes = 0;
      }
      if (ticket.yuz === "") {
        ticket.yuz = 0;
      }
      if (ticket.ikiyuz === "") {
        ticket.ikiyuz = 0;
      }
      if (ticket.elli === "") {
        ticket.elli = 0;
      }
      if (ticket.yirmi === "") {
        ticket.yirmi = 0;
      }
      if (ticket.ontl === "") {
        ticket.ontl = 0;
      }
      if (ticket.bes === "") {
        ticket.bes = 0;
      }
      if (ticket.yirmi === "") {
        ticket.yirmi = 0;
      }

      //nakit valid
      if (cash.bir === "") {
        cash.bir = 0;
      }
      if (cash.sifirbes === "") {
        cash.sifirbes = 0;
      }
      if (cash.sifiryirmibes === "") {
        cash.sifiryirmibes = 0;
      }
      if (cash.sifirbir === "") {
        cash.sifirbir = 0;
      }
      if (cash.sifirsifirbes === "") {
        cash.sifirsifirbes = 0;
      }
      if (cash.yuz === "") {
        cash.yuz = 0;
      }
      if (cash.ikiyuz === "") {
        cash.ikiyuz = 0;
      }
      if (cash.elli === "") {
        cash.elli = 0;
      }
      if (cash.yirmi === "") {
        cash.yirmi = 0;
      }
      if (cash.ontl === "") {
        cash.ontl = 0;
      }
      if (cash.bes === "") {
        cash.bes = 0;
      }
      if (cash.yirmi === "") {
        cash.yirmi = 0;
      }
      //sodexo valid
      if (sodexo.bir === "") {
        sodexo.bir = 0;
      }
      if (sodexo.sifirbes === "") {
        sodexo.sifirbes = 0;
      }
      if (sodexo.sifiryirmibes === "") {
        sodexo.sifiryirmibes = 0;
      }
      if (sodexo.sifirbir === "") {
        sodexo.sifirbir = 0;
      }
      if (sodexo.sifirsifirbes === "") {
        sodexo.sifirsifirbes = 0;
      }
      if (sodexo.yuz === "") {
        sodexo.yuz = 0;
      }
      if (sodexo.ikiyuz === "") {
        sodexo.ikiyuz = 0;
      }
      if (sodexo.elli === "") {
        sodexo.elli = 0;
      }
      if (sodexo.yirmi === "") {
        sodexo.yirmi = 0;
      }
      if (sodexo.ontl === "") {
        sodexo.ontl = 0;
      }
      if (sodexo.bes === "") {
        sodexo.bes = 0;
      }
      if (sodexo.yirmi === "") {
        sodexo.yirmi = 0;
      }

      //gunsonu valid

      if (setCardGunSonu === null || setCardGunSonu === "") {
        setCardGunSonu = 0;
      }

      if (multinetGunSonu === "" || multinetGunSonu === null) {
        multinetGunSonu = 0;
      }
      if (ticketGunSonu === null || ticketGunSonu === "") {
        ticketGunSonu = 0;
      }
      if (metropolGunSonu === null || metropolGunSonu === "") {
        metropolGunSonu = 0;
      }
      if (sodexoGunSonu === null || sodexoGunSonu === "") {
        sodexoGunSonu = 0;
      }
      if (ceoCardGunSonu === null || ceoCardGunSonu === "") {
        ceoCardGunSonu = 0;
      }
      if (sinemaBileti === null || sinemaBileti === "") {
        sinemaBileti = 0;
      }

      if (avmKuponu === null || avmKuponu === "") {
        avmKuponu = 0;
      }

      //POSLAR VALİD
      if (credit.bir === null || credit.bir === "") {
        credit.bir = 0;
      }
      if (credit.iki === null || credit.iki === "") {
        credit.iki = 0;
      }
      if (credit.uc === null || credit.uc === "") {
        credit.uc = 0;
      }
      if (credit.dort === null || credit.dort === "") {
        credit.dort = 0;
      }
      if (credit.bes === null || credit.bes === "") {
        credit.bes = 0;
      }
      if (credit.alti === null || credit.alti === "") {
        credit.alti = 0;
      }
      if (credit.yedi === null || credit.yedi === "") {
        credit.yedi = 0;
      }
      //MASRAF VALİD
      if (masraf.tutarBir === null || masraf.tutarBir === "") {
        masraf.tutarBir = 0;
      }
      if (masraf.tutarIki === null || masraf.tutarIki === "") {
        masraf.tutarIki = 0;
      }
      if (masraf.tutarUc === null || masraf.tutarUc === "") {
        masraf.tutarUc = 0;
      }
      if (masraf.tutarDort === null || masraf.tutarDort === "") {
        masraf.tutarDort = 0;
      }
      if (masraf.tutarBes === null || masraf.tutarBes === "") {
        masraf.tutarBes = 0;
      }
      if (masraf.tutarAlti === null || masraf.tutarAlti === "") {
        masraf.tutarAlti = 0;
      }
      if (yemekSepeti === null || yemekSepeti === "") {
        yemekSepeti = 0;
      }
      //önce bak varsa güncelle
      const getData = await model.find({ created_at, subeId });

      if (getData.length > 0) {
        //varsa güncelle
        const UpdateData = await model.findOneAndUpdate(
          { created_at, subeId },
          {
            cash,
            credit,
            ticket,
            sodexo,
            armada,
            multinet,
            setcard,
            masraf,
            iade,
            created_at,
            setCardGunSonu,
            multinetGunSonu,
            metropolGunSonu,
            ticketGunSonu,
            sodexoGunSonu,
            ceoCardGunSonu,
            avmKuponu,
            sinemaBileti,
            yemekSepeti,
          },
          {
            new: true,
          }
        );
        const resp = await UpdateData.save();

        response.handleReponse(req, res, resp, "ShopReport:Create");
      } else {
        //yoksa ekle
        const newData = new model({
          subeId,
          userId,
          cash,
          credit,
          ticket,
          created_at,
          sodexo,
          armada,
          multinet,
          setcard,
          masraf,
          iade,
          yemekSepeti,
          setCardGunSonu,
          multinetGunSonu,
          metropolGunSonu,
          ceoCardGunSonu,
          avmKuponu,
          sinemaBileti,
          sodexoGunSonu,
          ticketGunSonu,
        });
        const resp = await newData.save();

        response.handleReponse(req, res, resp, "ShopReport:Create");
      }
    } catch (error) {
      response.handleError(req, res, error, "Create", "ShopReport");
    }
  },
  async Update(req, res, next) {
    try {
      const { id } = req.params;
      const updateData = await model.findById(id);
      updateData.status = 1;
      const resp = await updateData.save();
      response.handleReponse(req, res, resp, "ShopReport:Update");
    } catch (error) {
      response.handleError(req, res, error, "Update", "ShopReport");
    }
  },
  async Delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.findById(id);
      const resp = await deleteData.remove();
      response.handleReponse(req, res, resp, "ShopReport:Delete");
    } catch (error) {
      response.handleError(req, res, error, "Delete", "ShopReport");
    }
  },
  async Get(req, res, next) {
    try {
      const { date, subeId } = req.body;
      const deleteData = await model.find({
        created_at: date,
        subeId,
        status: 0,
      });

      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "Get", "ShopReport");
    }
  },
  async CheckReport(req, res) {
    try {
      const { date, subeId } = req.body;
      const deleteData = await model.find({
        created_at: date,
        subeId,
        status: 1,
      });

      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "Get", "ShopReport");
    }
  },
  async GetReport(req, res, next) {
    try {
      const { id } = req.params;
      const deleteData = await model.find({ created_at: date, subeId });

      response.handleData(req, res, deleteData);
    } catch (error) {
      response.handleError(req, res, error, "Get", "ShopReport");
    }
  },
  async GetToplamKasa(req, res) {
    try {
      const { date } = req.body;
      const data = await model.find({ status: 1, created_at: date });
      response.handleData(req, res, data);
    } catch (error) {
      response.handleError(req, res, error, "GetToplamKasa", "ShopReport");
    }
  },
  async GetDateReport(req, res) {
    try {
      const { finishDate, startDate, subeId } = req.body;

      let data = await model.aggregate([
        {
          $match: {
            created_at: {
              $gte: startDate,
              $lt: finishDate,
            },
            subeId: subeId,
          },
        },

        {
          $group: {
            _id: "$created_at",
            ticket: { $first: "$ticket" },
            sodexo: { $first: "$sodexo" },
            credit: { $first: "$credit" },
            masraf: { $first: "$masraf" },
            iade: { $first: "$iade" },

            cash: { $first: "$cash" },
            setCardGunSonu: { $first: "$setCardGunSonu" },
            multinetGunSonu: { $first: "$multinetGunSonu" },
            metropolGunSonu: { $first: "$metropolGunSonu" },
            sodexoGunSonu: { $first: "$sodexoGunSonu" },
            ticketGunSonu: { $first: "$ticketGunSonu" },
            ceoCardGunSonu: { $first: "$ceoCardGunSonu" },
            avmKuponu: { $first: "$avmKuponu" },
            sinemaBileti: { $first: "$sinemaBileti" },
            yemekSepeti: { $first: "$yemekSepeti" },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);

      response.handleData(req, res, data);
    } catch (error) {
      response.handleError(req, res, error, "GetDateReport", "ShopReport");
    }
  },
  async GetGenelToplam(req, res) {
    try {
      const { finishDate, startDate } = req.body;

      let data = await model.aggregate([
        {
          $match: {
            created_at: {
              $gte: startDate,
              $lt: finishDate,
            },
          },
        },

        {
          $group: {
            _id: "$created_at",
            ticket: { $push: "$ticket" },
            sodexo: { $push: "$sodexo" },
            credit: { $push: "$credit" },
            masraf: { $push: "$masraf" },
            iade: { $push: "$iade" },
            subeId: { $push: "$subeId" },
            created_at: { $push: "$created_at" },
            cash: { $push: "$cash" },
            setCardGunSonu: { $push: "$setCardGunSonu" },
            multinetGunSonu: { $push: "$multinetGunSonu" },
            metropolGunSonu: { $push: "$metropolGunSonu" },
            sodexoGunSonu: { $push: "$sodexoGunSonu" },
            ticketGunSonu: { $push: "$ticketGunSonu" },
            ceoCardGunSonu: { $push: "$ceoCardGunSonu" },
            avmKuponu: { $push: "$avmKuponu" },
            sinemaBileti: { $push: "$sinemaBileti" },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);
      response.handleData(req, res, data);
    } catch (error) {
      response.handleError(req, res, error, "GetDateReport", "ShopReport");
    }
  },
};

