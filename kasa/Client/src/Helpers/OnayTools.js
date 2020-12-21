import Service from "../Service";
import axios from "axios";
import moment from "moment";
export const CheckOnayUser = async (type) => {
  //Kullanıcı Onay Süreci
  let OnayUserList = await Service.save("/GetOnayList", {
    type: "CheckList",
  });

  return OnayUserList;
};

export const ListOnayUser = async (headerId) => {
  return await Service.save("/OnayUserList", { headerId });
};
export const OnayUser = async (belgeId, user, name) => {
  let headerResult = await Service.save("/OnayHeader", {
    type: "CheckList",
    name,
    Date: moment().format("YYYY.MM.DD"),
  });

  let response = Service.save("/OnayList", {
    HeaderId: headerResult._id,
    UserId: user,
    BelgeId: belgeId,
  });
  return response;
};
export const MailGonder = async (type, UserId, belgeId, OnayHeaderId) => {
  if (UserId) {
    let UserInfo = await Service.get("/Users", UserId);
    var konu = "";
    var icerik = "";
    if (type === "CheckList") {
      konu = "Onaylada Bekleyen Bir CheckList Belgesi Bulunmaktadır. ";
      icerik =
        "Onaylada Bekleyen Bir CheckList Belgesi Bulunmaktadır.  <br/> İçeriği Görmek İçin <a href='http://85.105.113.179:5000/CheckList/Show/" +
        belgeId +
        "/" +
        OnayHeaderId +
        "'>Tıklayınız</a><br/> Onaylamak İçin <a href='http://85.105.113.179:5000/CheckList/Onay/" +
        belgeId +
        "/" +
        OnayHeaderId +
        " '>Tıklayınız</a>";
      let response = await Service.save("Mailgonder", {
        subject: konu,
        mailTo: UserInfo.data.email,
        message: icerik,
      });
      return response;
    }
  } else {
    return "Kullanıcı Bilgisi Yoktur";
  }
};
