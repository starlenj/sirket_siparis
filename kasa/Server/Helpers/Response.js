const log  = require("../config/Winston")
module.exports = {

    async handleError(req, res, response, action, logClass) {
        log.info(`Error ${action} : ${logClass} , Message : ${response}`);
        res.status(403).send({ success: false, code: 403, msg: response })
    },
    async handleReponse(req, res, response, action) {
        res.status(200).send({ success: true, code: 200, result: response, msg: "Islem Basarili"})
    },
    async handleData(req, res, data) {
        res.status(200).json({success: true, code: 200, data: data})
    }

}



