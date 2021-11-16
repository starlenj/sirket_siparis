const model = require('../models/Permission')
const response =require('../Helpers/Response')
module.exports={

    async List(req,res,next){
    const data = await    model.find({})
    response.handleData(req,res,data)
    },
    async New(req,res,next)
    {
        try{

        const {name,userId} = req.body
        const newData = new model({
            name,userId
        }) 
        const resp = await newData.save()
        response.handleReponse(req,res,resp,'Permission:Create')
    }catch(error)
    {
        response.handleError(req,res,error,'Create','Permission')
    }
    },
    async Update(req,res,next)
    {
        try{

            const{id} = req.params
            const {   name,value} = req.body
            const updateData =  await model.findById(id)
            updateData.name = name
            updateData.UserId = UserId
            const resp = await updateData.save()
            response.handleReponse(req,res,resp,'Permission:Update')
        }catch(error)
        {   
            response.handleError(req,res,error,'Update','Permission')
        }
    },
    async Delete(req,res,next)
    {
        try {
            
            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp  = await  deleteData.remove()
            response.handleReponse(req,res,resp,'Permission:Delete')
        } catch (error) {
            response.handleError(req,res,error,'Delete','Permission')
        }
    },
    async Get(req,res,next)
    {
        try{
            const{id} = req.params
            const getData =  await model.find({userId:id})
            response.handleData(req,res,getData)
        }catch(error)
        {   
            response.handleError(req,res,error,'Update','Permission')
        }
    }

}
