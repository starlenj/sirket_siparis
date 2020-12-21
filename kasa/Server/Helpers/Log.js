const userLogModel =require('../models/userLog')
const errorLog = require('../models/errorLog')


module.exports={
    async newLog (actions,response,token){
        userLogModel.create({
            actions,response,token
        })
    },
    async newError(logClass,actions,token,message)
    {
        errorLog.create({
            class : logClass,actions,token,message
        })
    }
}