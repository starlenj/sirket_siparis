const model = require('../models/VegaConfig')
const response =require('../Helpers/Response')
module.exports={

    async List(req,res,next){
        const data = await    model.find({})
        response.handleData(req,res,data)
    },
    async New(req,res,next)
    {
        try{

            const {name,host,password,username,dbname,port,firmaId,donemId,sube,kasa,depoId} = req.body
            const newData = new model({
                name,host,password,username,dbname,port,firmaId,donemId,sube,kasa,depoId
            })
            const resp = await newData.save()
            response.handleReponse(req,res,resp,'VegaConfig:Create')
        }catch(error)
        {
            response.handleError(req,res,error,'Create','VegaConfig')
        }
    },
    async Update(req,res,next)
    {
        try{

            const{id} = req.params
            const {name,host,password,username,dbname,port,firmaId,donemId,sube,kasa,depoId} = req.body
            const updateData =  await model.findById(id)
            updateData.name = name
            updateData.lastNamehost=host
            updateData.username=username
            updateData.dbname =dbname
            updateData.port=port
            updateData.password=password
            updateData.host=host
            updateData.firmaId = firmaId
            updateData.donemId = donemId
            updateData.sube = sube
            updateData.kasa = kasa
            updateData.depoId = depoId
            const resp = await updateData.save()
            response.handleReponse(req,res,resp,'VegaConfig:Update')
        }catch(error)
        {
            response.handleError(req,res,error,'Update','VegaConfig')
        }
    },
    async UpdateFirmaDonem(req,res){
        try{
            const{id} = req.params
            const {firmaId,donemId} = req.body
            const updateData =  await model.findById(id)
            updateData.firmaId = firmaId
            updateData.donemId = donemId
            const resp = await updateData.save()
            response.handleReponse(req,res,resp,'VegaConfig:Update')
        }catch(error)
        {
            response.handleError(req,res,error,'UpdateFirmaDonem','VegaConfig')
        }
    },
    async UpdateDepo(req,res){
        try{
            const{id} = req.params
            const {depoId} = req.body
            const updateData =  await model.findById(id)
            updateData.depoId = depoId
            const resp = await updateData.save()
            response.handleReponse(req,res,resp,'VegaConfig:Update')
        }catch(error)
        {
            response.handleError(req,res,error,'UpdateDepo','VegaConfig')
        }
    },

    async Delete(req,res,next)
    {
        try {

            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp  = await  deleteData.remove()
            response.handleReponse(req,res,resp,'VegaConfig:Delete')
        } catch (error) {
            response.handleError(req,res,error,'Delete','VegaConfig')
        }
    },
    async Get(req,res,next)
    {
        try {

            const {id} = req.params
            const deleteData = await model.findById(id)

            response.handleData(req,res,deleteData)
        } catch (error) {
            response.handleError(req,res,error,'Get','VegaConfig')
        }
    }


}