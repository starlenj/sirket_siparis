const model = require('../models/Sepet')
const response = require('../Helpers/Response')
const vegaBelge = require('./VegaBelge')
module.exports = {

    async List(req, res, next) {
        const data = await model.find({})
        response.handleData(req, res, data)
    },
    async New(req, res, next) {
        try {

            const {onayAciklama,aciklama,subeId, miktar, stokNo, birimNo, created_at, status, userId,stokKodu,malinCinsi,birimAdi} = req.body
            const newData = new model({
                onayAciklama,aciklama,subeId, miktar, stokNo, birimNo, created_at, status, userId,stokKodu,malinCinsi,birimAdi
            })
            const resp = await newData.save()
            response.handleReponse(req, res, resp, 'Sepet:Create')
        } catch (error) {
            response.handleError(req, res, error, 'Create', 'Sepet')
        }
    },
    async Update(req, res, next) {
        try {

            const {id} = req.params
            const {onayAciklama,subeId, miktar, stokNo, birimNo, status,stokKodu,malinCinsi,birimAdi,aciklama} = req.body
            const updateData = await model.findById(id)
            updateData.subeId = subeId
            updateData.miktar = miktar
            updateData.stokNo = stokNo
            updateData.birimNo = birimNo
            updateData.sodexo = sodexo
            updateData.status = status
            updateData.stokKodu= stokKodu
            updateData.malinCinsi= malinCinsi
            updateData.birimAdi= birimAdi
            updateData.aciklama = aciklama
            updateData.onayAciklama=onayAciklama
            const resp = await updateData.save()
            response.handleReponse(req, res, resp, 'Sepet:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'Sepet')
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
    async GetSepet(req, res, next) {
        try {
            const {date, subeId,orderState} = req.body
            const deleteData = await model.find({created_at: date, subeId,status:orderState})

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'Sepet')
        }
    },
    async Get(req, res, next) {
        try {
            const {id} = req.params
            const deleteData = await model.findById(id)
            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'GetSepet', 'Sepet')
        }
    },
    async UpdateStatus(req,res,next)
    {
        try {

           
            const {status,onayMiktar,_id,onayAciklama} = req.body
            const updateData = await model.findById(_id)
            updateData.status = status
            updateData.onayMiktar = onayMiktar
            updateData.onayAciklama=onayAciklama
            const resp = await updateData.save()
            const vegaBelgeResult = await vegaBelge.Main(req,res)
            response.handleReponse(req, res, resp, 'Sepet:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'Sepet')
        }
    }
}