const model = require('../models/ShopReport')
const response = require('../Helpers/Response')

module.exports = {

    async List(req, res, next) {
        const data = await model.find({})
        response.handleData(req, res, data)
    },
    async New(req, res, next) {
        try {

            const {subeId, userId, cash, credit, ticket, sodexo, armada, multinet, setcard, created_at} = req.body
            const newData = new model({
                subeId, userId, cash, credit, ticket, created_at, sodexo, armada, multinet, setcard
            })
            const resp = await newData.save()
        
            response.handleReponse(req, res, resp, 'ShopReport:Create')
        } catch (error) {
            response.handleError(req, res, error, 'Create', 'ShopReport')
        }
    },
    async Update(req, res, next) {
        try {

            const {id} = req.params
            const {subeId, userId, cash, credit, ticket, sodexo, armada, multinet, setcard} = req.body
            const updateData = await model.findById(id)
            updateData.subeId = subeId
            updateData.cash = cash
            updateData.userId = userId
            updateData.credit = credit
            updateData.ticket = ticket
            updateData.sodexo = sodexo
            updateData.armada = armada
            updateData.multinet = multinet
            updateData.setcard = setcard
            const resp = await updateData.save()
            response.handleReponse(req, res, resp, 'ShopReport:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'ShopReport')
        }
    },
    async Delete(req, res, next) {
        try {

            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp = await deleteData.remove()
            response.handleReponse(req, res, resp, 'ShopReport:Delete')
        } catch (error) {
            response.handleError(req, res, error, 'Delete', 'ShopReport')
        }
    },
    async Get(req, res, next) {
        try {

            const {date, subeId} = req.body
            const deleteData = await model.find({created_at: date, subeId})

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'ShopReport')
        }
    },
    async GetReport(req, res, next) {
        try {
            const {id} = req.params
            const deleteData = await model.findById(id)

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'ShopReport')
        }
    }


}