const express = require("express");
const router = express.Router();
const axios = require("axios");
router.post("/SmsGonder", async (req, res) => {
    const { GSM, Mesaj } = req.body;
    var url = "https://api.netgsm.com.tr/sms/send/get/?usercode=" + process.env.SMS_USERNAME + "&password=" + process.env.SMS_PASSWORD + "&gsmno=" + GSM + "&message=" + Mesaj + "&msgheader=HMBRGR";
    let SmsResponse = await axios.get(encodeURI(url));
    res.send(SmsResponse.data);

})

module.exports = router;