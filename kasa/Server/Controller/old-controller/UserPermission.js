const model = require('../models/UserPermission')
const response =require('../Helpers/Response')
module.exports={

    async List(req,res,next){
    const data = await    model.find({})
    response.handleData(req,res,data)
    },
    async New(req,res,next)
    {
        try{

        const {UserId,PermissionId} = req.body
        const newData = new model({
            UserId,PermissionId
        }) 
        const resp = await newData.save()
        response.handleReponse(req,res,resp,'UserPermission:Create')
    }catch(error)
    {
        response.handleError(req,res,error,'Create','UserPermission')
    }
    },
    async Update(req,res,next)
    {
        try{

            const{id} = req.params
            const {   UserId,PermissionId} = req.body
            const updateData =  await model.findById(id)
            updateData.PermissionId = PermissionId
            updateData.UserId = UserId
            const resp = await updateData.save()
            response.handleReponse(req,res,resp,'UserPermission:Update')
        }catch(error)
        {   
            response.handleError(req,res,error,'Update','UserPermission')
        }
    },
    async Delete(req,res,next)
    {
        try {
            
            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp  = await  deleteData.remove()
            response.handleReponse(req,res,resp,'UserPermission:Delete')
        } catch (error) {
            response.handleError(req,res,error,'Delete','UserPermission')
        }
    },
    async Get(req,res,next)
    {
        try{
            const{id} = req.params
            const getData =  await model.findById(id)
            response.handleData(req,res,getData)
        }catch(error)
        {   
            response.handleError(req,res,error,'Update','UserPermission')
        }
    },
    async GetUserPermission(req,res,next)
    {
        try{
            const{id} = req.params
            const getData =  await model.find({UserId: id})
            response.handleData(req,res,getData)
        }catch(error)
        {   
            response.handleError(req,res,error,'GetUserPermission','UserPermission')
        }
    }

}