const model = require("../models/OrderHeader");
const moment = require('moment');
const axios = require('axios');
module.exports = {
    async main() {
        setInterval(() => {
            this.GetWaitingOrderList();
        }, 30000)

    },
    async GetWaitingOrderList() {
        try {
            const today = moment().startOf('day')

            let response = await model.find({
                OrderStatus: 0, Date: {
                    $gte: today.toDate(),
                    $lte: moment(today).endOf('day').toDate()
                }
            });
            if (response.length > 0) {
                var Mesaj = ` ${response[0].SubeId} subesinde onay bekleyen bir adet siparis var . Musteri bilgisi ${response[0].CustomerName}`
                var GSM = `5301700974,5323643217,5399462747`
                var url = "https://api.netgsm.com.tr/sms/send/get/?usercode=" + process.env.SMS_USERNAME + "&password=" + process.env.SMS_PASSWORD + "&gsmno=" + GSM + "&message=" + Mesaj + "&msgheader=HMBRGR";
                let SmsResponse = await axios.get(encodeURI(url));
                console.log(`sms gitti`, SmsResponse);
            }

        } catch {
            console.error("SMS ERROR")
        }

    }
}