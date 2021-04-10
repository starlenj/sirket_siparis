const model = require('../models/SayimHareket')
const response = require('../Helpers/Response')
module.exports = {

    async List(req, res, next) {
        const data = await model.find({})
        response.handleData(req, res, data)
    },
    async New(req, res, next) {
        try {

            const {headerId,stokNo,birimNo,miktar} = req.body
            const newData = new model({                
            headerId,stokNo,birimNo,miktar
            })
            const resp = await newData.save()
            response.handleReponse(req, res, resp, 'SayimHareket:Create')
        } catch (error) {
            response.handleError(req, res, error, 'Create', 'SayimHareket')
        }
    },
    async Update(req, res, next) {
        try {

            const {id} = req.params
            const { headerId,stokNo,birimNo,miktar,status} = req.body
            const updateData = await model.findById(id)
            updateData.headerId = headerId
            updateData.birimNo = birimNo
            updateData.stokNo = stokNo
            updateData.miktar = miktar
            updateData.status  =status
            const resp = await updateData.save()
            response.handleReponse(req, res, resp, 'SayimHareket:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'SayimHareket')
        }
    },
    async Delete(req, res, next) {
        try {
            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp = await deleteData.remove()
            response.handleReponse(req, res, resp, 'SayimHareket:Delete')
        } catch (error) {
            response.handleError(req, res, error, 'Delete', 'SayimHareket')
        }
    },
    async GetSayimHareket(req, res, next) {
        try {
            const {date, subeId,orderState} = req.body
            const deleteData = await model.find({created_at: date, subeId,status:orderState})

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'SayimHareket')
        }
    },
    async Get(req, res, next) {
        try {
            const {id} = req.params
            const deleteData = await model.findById(id)
            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'GET', 'SayimHareket')
        }
    },
    async UpdateStatus(req,res,next)
    {
        try {

           
            const {status,onayMiktar,_id,onayAciklama} = req.body
            const updateData = await model.findById(_id)
            updateData.status = status
            const resp = await updateData.save()
            const vegaBelgeResult = await vegaBelge.Main(req,res)
            response.handleReponse(req, res, resp, 'SayimHareket:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'SayimHareket')
        }
    }
}