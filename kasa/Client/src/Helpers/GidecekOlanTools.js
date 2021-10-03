import Service from "../Service";
import {GidecekModel} from  "./GidecekOlanModel"
export const GetAksamKalan = async (subeId,tarih) => {
  var AksamKalan = {
   ...GidecekModel
  };
  let SubeResult;
    SubeResult = await Service.save(  "SubeKalan/GetReport" , {
      subeId,
      startDate : tarih,
    });
  SubeResult.forEach((item) => {
    if (item.urunAdi === "DoksanGr") {
        AksamKalan.DoksanGr = item.miktar;
    }
    if (item.urunAdi === "YuzKirkGr") {
        AksamKalan.YuzKirkGr = item.miktar;
    }
    if (item.urunAdi === "CocukKofte") {
        AksamKalan.Cocuk = item.miktar;
    }
    if (item.urunAdi === "TavukFileto") {
        AksamKalan.Tavuk = item.miktar;
    }
    if (item.urunAdi === "TavukKofte") {
        AksamKalan.TavukKofte = item.miktar;
    }
    if (item.urunAdi === "KucukTavukKofte") {
        AksamKalan.KucukTavukKofte = item.miktar;
    }
  });
  return AksamKalan;
}

export const GetSubeIhtiyac = async (subeId,tarih) => {
  var Ihtiyac = {
    ...GidecekModel
   };
  let SubeResult;

    SubeResult = await Service.save(  "SubeIhtiyac/GetReport"  , {
      subeId,
      gun: tarih,
    }); 
  SubeResult.forEach((item) => {
    if (item.urunAdi === "DoksanGr") {
      Ihtiyac.DoksanGr = item.miktar;
    }
    if (item.urunAdi === "YuzKirkGr") {
      Ihtiyac.YuzKirkGr = item.miktar;
    }
    if (item.urunAdi === "CocukKofte") {
      Ihtiyac.Cocuk = item.miktar;
    }
    if (item.urunAdi === "TavukFileto") {
      Ihtiyac.Tavuk = item.miktar;
    }
    if (item.urunAdi === "TavukKofte") {
      Ihtiyac.TavukKofte = item.miktar;
    }
    if (item.urunAdi === "KucukTavukKofte") {
      Ihtiyac.KucukTavukKofte = item.miktar;
    }
  });
  return Ihtiyac;
}


