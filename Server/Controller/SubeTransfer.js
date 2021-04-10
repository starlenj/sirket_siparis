const model = require('../models/SubeTransfer')
const response = require('../Helpers/Response')
const VegaBelge = require('./VegaBelge')
const SubeController = require('../models/Sube')
module.exports = {

    async List(req, res, next) {
        const data = await model.find({})
        response.handleData(req, res, data)
    },
    async New(req, res, next) {
        try {

            const {aciklama,onyaAciklama,kaynakSube, hedefSube,miktar, stokNo, birimNo, created_at, status, userId,stokKodu,malinCinsi,birimAdi} = req.body
            const newData = new model({
                aciklama,onyaAciklama,kaynakSube,hedefSube, miktar, stokNo, birimNo, created_at, status, userId,stokKodu,malinCinsi,birimAdi
            })
            const resp = await newData.save()
           
            response.handleReponse(req, res, resp, 'Transfer:Create')
        } catch (error) {
            response.handleError(req, res, error, 'Create', 'Transfer')
        }
    },
    async Update(req, res, next) {
        try {

            const {id} = req.params
            const {aciklama,onayAciklama,kaynakSube,hedefSube, miktar, stokNo, birimNo, stokKodu,malinCinsi,birimAdi} = req.body
            const updateData = await model.findById(id)
            updateData.kaynakSube = kaynakSube
            updateData.miktar = miktar
            updateData.stokNo = stokNo
            updateData.birimNo = birimNo
            updateData.sodexo = sodexo
            updateData.status = 1
            updateData.stokKodu= stokKodu
            updateData.malinCinsi= malinCinsi
            updateData.birimAdi= birimAdi
            updateData.hedefSube=hedefSube
            updateData.onayAciklama=onayAciklama
            updateData.aciklama=aciklama
            const resp = await updateData.save()
            response.handleReponse(req, res, resp, 'Transfer:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'Transfer')
        }
    },
    async Delete(req, res, next) {
        try {
            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp = await deleteData.remove()
            response.handleReponse(req, res, resp, 'Transfer:Delete')
        } catch (error) {
            response.handleError(req, res, error, 'Delete', 'Transfer')
        }
    },
    async GetSepet(req, res, next) {
        try {
            const {date, subeId,orderState} = req.body
            const deleteData = await model.find({created_at: date, hedefSube:subeId,status:orderState})

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'Transfer')
        }
    },
    async Get(req, res, next) {
        try {
            const {id} = req.params
            const deleteData = await model.findById(id)
            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'GetTransfer', 'Sepet')
        }
    },
    async UpdateStatus(req,res,next)
    {
        try {

           
            const data = req.body
                data.forEach(async (data) => {
                    const updateData = await model.findById(data._id)
                    updateData.status = 1
                    updateData.onayMiktar = data.onayMiktar
                    const resp = await updateData.save()
                });


         

             //vega entegrasyonu bu aşamada olacak
            /*
            önce şube depoları alınacak
            daha sonra entegrasyon main fonksiyonuna belirlenen değişkenler gönderilecek
            */
           let kaynakSubeInfo = await SubeController.findById(req.body[0].kaynakSube)
           let hedefSubeInfo = await SubeController.findById(req.body[0].hedefSube)
         var kaynakDepo = kaynakSubeInfo.depoId
         var hedefDepo = hedefSubeInfo.depoId
         let vegaBelgeResult = await VegaBelge.Main(req,res,kaynakDepo,hedefDepo)

            response.handleReponse(req, res, resp, 'Transfer:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'TransferOnay')
        }
    }
}