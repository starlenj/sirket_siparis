const model = require('../models/User')
const response =require('../Helpers/Response')
const bcrypt = require('bcrypt')
module.exports={

    async List(req,res,next){
    const data = await    model.find({})
    response.handleData(req,res,data)
    },
    async New(req,res,next)
    {
        try{

            const {name,lastName,email,address,password,subeId,isAdmin} = req.body
            bcrypt.hash(password,10, async(err,hash)=>{
        const newData = new model({
            name,lastName,email,address,password:hash,subeId,isAdmin
        })
        const resp = await newData.save()
        response.handleReponse(req,res,resp,'User:Create')
            })
    }catch(error)
    {
        response.handleError(req,res,error,'Create','User')
    }
    },
    async Update(req,res,next)
    {
        try{

            const{id} = req.params
            const { name,lastName,email,subeId,address,password,isAdmin} = req.body
            const updateData =  await model.findById(id)
            updateData.name = name
            updateData.lastName=lastName
            updateData.email=email
            updateData.address =address
            updateData.password=password
            updateData.subeId = subeId
            updateData.isAdmin = isAdmin
            const resp = await updateData.save()
            response.handleReponse(req,res,resp,'User:Update')
        }catch(error)
        {
            response.handleError(req,res,error,'Update','User')
        }
    },
    async Delete(req,res,next)
    {
        try {

            const {id} = req.params
            const deleteData = await model.findById(id)
            const resp  = await  deleteData.remove()
            response.handleReponse(req,res,resp,'User:Delete')
        } catch (error) {
            response.handleError(req,res,error,'Delete','User')
        }
    },

    async Get(req,res,next)
    {
        try {

            const {id} = req.params
            const deleteData = await model.findById(id)
            response.handleData(req,res,deleteData)
        } catch (error) {
            response.handleError(req,res,error,'Get','User')
        }
    }
}
