const { yonetim_user } = require("../models");
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
  async get(email) {
    try {
      const getAllUser = await yonetim_user.findOne({ where: { email } });
      if (getAllUser === null) {
        return [];
      }
      return getAllUser.dataValues;
    } catch (error) {
      logger.info(`user-service get Error : ${error}`);
      throw new Error(error);
    }
  },
  async store(UserData) {
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
  },

  async update(UserData) {
    try {
      const newUser = await yonetim_user.update({
        ...UserData
      }, { where: { id: UserData.id } });
      return newUser
    } catch (error) {
      logger.info(`user-service update Error : ${error}`);
      throw new Error(error);
    }
  },
  async delete(UserData) {
    try {
      const newUser = await yonetim_user.destroy({ where: { id: UserData.id } });
      return newUser
    } catch (error) {
      logger.info(`user-service delete Error : ${error}`);
      throw new Error(error);
    }
  },

}


