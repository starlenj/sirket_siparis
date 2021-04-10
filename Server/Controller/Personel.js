const model = require('../models/Personel')
const response = require('../Helpers/Response')
module.exports = {

    async List(req, res, next) {
        const data = await model.find({ status: true })
        response.handleData(req, res, data)
    },
    async New(req, res, next) {
        try {

            const { SubeId, Ad, Soyad } = req.body

            const newData = new model({
                SubeId, Soyad, Ad
            })
            const resp = await newData.save()
            response.handleReponse(req, res, resp, 'Personel:Create')
        } catch (error) {
            response.handleError(req, res, error, 'Create', 'Personel')
        }
    },
    async Update(req, res, next) {
        try {

            const { id } = req.params
            const { SubeId, Ad, Soyad } = req.body
            const updateData = await model.findById(id)
            updateData.SubeId = SubeId
            updateData.Ad = Ad
            updateData.Soyad = Soyad

            const resp = await updateData.save()
            response.handleReponse(req, res, resp, 'Personel:Update')
        } catch (error) {
            response.handleError(req, res, error, 'Update', 'Personel')
        }
    },
    async Delete(req, res, next) {
        try {

            const { id } = req.params
            const deleteData = await model.findById(id)
            deleteData.status = false
            const resp = await deleteData.save()
            response.handleReponse(req, res, resp, 'Personel:Delete')
        } catch (error) {
            response.handleError(req, res, error, 'Delete', 'Personel')
        }
    },
    async Get(req, res, next) {
        try {

            const { id } = req.params
            const deleteData = await model.findById(id)

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'Personel')
        }
    },

    async GetSubePersonel(req, res, next) {
        try {

            const { SubeId } = req.body
            const deleteData = await model.find({ SubeId: SubeId })

            response.handleData(req, res, deleteData)
        } catch (error) {
            response.handleError(req, res, error, 'Get', 'Personel')
        }

    }


}
