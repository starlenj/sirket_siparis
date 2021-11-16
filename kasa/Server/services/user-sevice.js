const {yonetim_user} = require("../models");
const logger = require("../config/Winston");
const bcrypt = require("bcrypt");

module.exports = { 
   
  async getAll() {
    try {
       const getAllUser = await yonetim_user.findAll()
       return getAllUser;
    } catch (error) {
        logger.info(`user-service getAll Error : ${error}`);
        throw new Error(error);  
    }
  },
  async store(UserData){
    try {
       UserData.password = await bcrypt.hash(UserData.password, 10)
       const newUser = await yonetim_user.create({
           ...UserData
       });
       return newUser
    } catch (error) {
        logger.info(`user-service store Error : ${error}`);
        throw new Error(error);  
    }
  }

}


