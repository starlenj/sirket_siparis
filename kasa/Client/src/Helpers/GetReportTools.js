const moment = require("moment");
const Service = require("../Service");
export const GetSefimReport = async (SubeId, startDate, endDate) => {
  return await Service.default.save("Sefim/GetToplamCiro", {
    data: SubeId,
    startDate: moment(startDate).format("YYYY.MM.DD"),
    endDate: moment(endDate).format("YYYY.MM.DD"),
  });
};

export const GetKasaReport = async (SubeId, startDate, endDate) => {
  var KasaData = [];
  let data = await Service.default.save("shopReportView/GetDateReport", {
    subeId: SubeId,
    startDate: moment(startDate).format("YYYY.MM.DD"),
    finishDate: moment(endDate).format("YYYY.MM.DD"),
  });

  data.forEach((Kasa) => {
    var Kredi =
      parseFloat(Kasa.credit.bir) +
      parseFloat(Kasa.credit.iki) +
      parseFloat(Kasa.credit.uc) +
      parseFloat(Kasa.credit.dort) +
      parseFloat(Kasa.credit.bes) +
      parseFloat(Kasa.credit.alti) +
      parseFloat(Kasa.credit.yedi);
    var Nakit =
      parseFloat(Kasa.cash.yuz) * 100 +
      parseFloat(Kasa.cash.ikiyuz) * 200 +
      parseFloat(Kasa.cash.elli) * 50 +
      parseFloat(Kasa.cash.yirmi) * 20 +
      parseFloat(Kasa.cash.ontl) * 10 +
      parseFloat(Kasa.cash.bes) * 5 +
      parseFloat(Kasa.cash.bir) +
      parseFloat(Kasa.cash.sifirbes) * 0.5 +
      parseFloat(Kasa.cash.sifiryirmibes) * 0.25 +
      parseFloat(Kasa.cash.sifirbir) * 0.1 +
      parseFloat(Kasa.cash.sifirsifirbes) * 0.05 +
      parseFloat(Kasa.masraf.tutarBir) +
      parseFloat(Kasa.masraf.tutarIki) +
      parseFloat(Kasa.masraf.tutarUc) +
      parseFloat(Kasa.masraf.tutarDort) +
      parseFloat(Kasa.masraf.tutarBes) +
      parseFloat(Kasa.masraf.tutarAlti);
    var ticketYK = parseFloat(
      parseFloat(Kasa.ticket.yuz) * 100 +
      parseFloat(Kasa.ticket.ikiyuz) * 200 +
      parseFloat(Kasa.ticket.elli) * 50 +
      parseFloat(Kasa.ticket.yirmi) * 20 +
      parseFloat(Kasa.ticket.ontl) * 10 +
      parseFloat(Kasa.ticket.bes) * 5 +
      parseFloat(Kasa.ticket.bir) +
      parseFloat(Kasa.ticket.sifirbes) * 0.5 +
      parseFloat(Kasa.ticket.sifiryirmibes) * 0.25 +
      parseFloat(Kasa.ticket.sifirbir) * 0.1 +
      parseFloat(Kasa.ticket.sifirsifirbes) * 0.05
    ).toFixed(2);
    var sodexoYK = parseFloat(
      parseFloat(Kasa.sodexo.yuz) * 100 +
      parseFloat(Kasa.sodexo.ikiyuz) * 200 +
      parseFloat(Kasa.sodexo.elli) * 50 +
      parseFloat(Kasa.sodexo.yirmi) * 20 +
      parseFloat(Kasa.sodexo.ontl) * 10 +
      parseFloat(Kasa.sodexo.bes) * 5 +
      parseFloat(Kasa.sodexo.bir) +
      parseFloat(Kasa.sodexo.sifirbir) * 0.1 +
      parseFloat(Kasa.sodexo.sifirsifirbes) * 0.05
    ).toFixed(2);

    var YemekCeki =

      parseFloat(Kasa.setCardGunSonu) +
      parseFloat(Kasa.multinetGunSonu) +
      parseFloat(Kasa.ceoCardGunSonu) +
      parseFloat(Kasa.metropolGunSonu) +
      parseFloat(Kasa.ticketGunSonu) +
      parseFloat(Kasa.sodexoGunSonu) +
      parseFloat(sodexoYK) +
      parseFloat(ticketYK) +
      parseFloat(Kasa.avmKuponu) +
      parseFloat(Kasa.sinemaBileti);
    var YKDiger =
      parseFloat(Kasa.avmKuponu) +
      parseFloat(Kasa.sinemaBileti);
    KasaData.push({
      avmKuponu: Kasa.avmKuponu,
      ceoCardGunSonu: Kasa.ceoCardGunSonu,
      metropolGunSonu: Kasa.metropolGunSonu,
      multinetGunSonu: Kasa.multinetGunSonu,
      setCardGunSonu: Kasa.setCardGunSonu,
      sinemaBileti: Kasa.sinemaBileti,
      sodexoGunSonu: Kasa.sodexoGunSonu,
      ticketGunSonu: Kasa.ticketGunSonu,
      yemekSepeti: Kasa.yemekSepeti,
      credit: Kredi,
      ticketYK: ticketYK,
      cash: Nakit,
      _id: Kasa._id,
      yemekCeki: YemekCeki,
      sodexoYK: sodexoYK,
      masraf: Kasa.masraf,
      iade: Kasa.iade,
      ykDiger: YKDiger
    });
  });
  return KasaData;
};

export const GetVegaKasa = async (startDate, endDate, subeAdi) => {
  var Toplam = 0;
  var Kasa = [];
  let result = await Service.default.save("Vega/GetVegaKasa", {
    startDate,
    endDate,
    subeAdi,
  });
  result.map((item) => {
    Toplam += item.TLGIDER;

    Kasa.push({
      Toplam,
      Sube: item.SUBE,
      Tutar: item.TLGIDER,
      Tarih: item.TARIH,
      Kullanici: item.USERNAME,
    });
  });
  return Kasa;
};
export const GetVegaKasaToplam = async (startDate, endDate, subeAdi) => {
  let result = await Service.default.save("Vega/GetVegaKasaToplam", {
    startDate,
    endDate,
    subeAdi,
  });
  return result;
};
export const ReportTotal = async (data) => {
  var KasaData = {
    Nakit: 0,
    Credit: 0,
    Multinet: 0,
    Ticket: 0,
    Sodexo: 0,
    SetCard: 0,
    Cio: 0,
    Metropol: 0,
    YanToplam: 0,
    Diger: 0,
  };
  for (var i = 0; i <= 31; i++) {
    KasaData.Nakit += data[i] !== undefined ? parseFloat(data[i].cash) : 0;
    KasaData.Credit += data[i] !== undefined ? parseFloat(data[i].credit) : 0;
    KasaData.Multinet +=
      data[i] !== undefined ? parseFloat(data[i].multinetGunSonu) : 0;
    KasaData.Ticket +=
      data[i] !== undefined ? parseFloat(data[i].ticketGunSonu) : 0;
    KasaData.Ticket += data[i] !== undefined ? parseFloat(data[i].ticketYK) : 0;
    KasaData.Sodexo +=
      data[i] !== undefined ? parseFloat(data[i].sodexoGunSonu) : 0;
    KasaData.Sodexo += data[i] !== undefined ? parseFloat(data[i].sodexoYK) : 0;
    KasaData.SetCard +=
      data[i] !== undefined ? parseFloat(data[i].setCardGunSonu) : 0;
    KasaData.Cio +=
      data[i] !== undefined ? parseFloat(data[i].ceoCardGunSonu) : 0;
    KasaData.Metropol +=
      data[i] !== undefined ? parseFloat(data[i].metropolGunSonu) : 0;
  }
  KasaData.YanToplam =
    parseFloat(KasaData.Nakit) +
    parseFloat(KasaData.Credit) +
    parseFloat(KasaData.Multinet) +
    parseFloat(KasaData.Ticket) +
    parseFloat(KasaData.Sodexo) +
    parseFloat(KasaData.SetCard) +
    parseFloat(KasaData.Cio) +
    parseFloat(KasaData.Metropol)
    ;
  return KasaData;
};
