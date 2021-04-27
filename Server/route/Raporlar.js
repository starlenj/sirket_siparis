const express = require("express");
const router = express.Router();

router.post("OdemeRaporu", async (req, res) => {
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
});
