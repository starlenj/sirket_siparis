const helper = require('./Log')
const message = require('./Message')
const log  = require("../config/Winston")
module.exports = {

    async handleError(req, res, response, action, logClass) {
        log.info(`Error ${action} : ${logClass} , Message : ${response}`);
        res.status(500).send({ success: false, code: 500, msg: response })
    },
    async handleReponse(req, res, response, action) {
        res.status(200).send({ success: true, code: 200, result: response, msg: message.SUCCESS_MESSAGE })
    },
    async handleData(req, res, data) {
        res.status(200).json(data)
    }

}



