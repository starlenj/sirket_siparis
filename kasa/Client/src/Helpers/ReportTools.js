const moment = require('moment');
const Service = require("../Service");

export const GetUrunBazliSatis = async (SubeId, startDate, endDate) => {

    return await Service.default.save("Sefim/GetUrunBazliSatis", {
        data: SubeId,
        startDate: moment(startDate).format("YYYY.MM.DD"),
        endDate: moment(endDate).format("YYYY.MM.DD"),
      });


}