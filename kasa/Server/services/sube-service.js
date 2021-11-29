const { subes } = require("../models");
const logger = require("../config/Winston");
const bcrypt = require("bcrypt");

module.exports = {

  async getAll() {
    try {
      const getAllSube = await subes.findAll()
      return getAllSube;
    } catch (error) {
      logger.info(`sube-service getAll Error : ${error}`);
      throw new Error(error);
    }
  },
  async get(name) {
    try {
      const getSube = await subes.findOne({ where: { name } });
      if (getSube === null) {
        return [];
      }
      return getSube.dataValues;
    } catch (error) {
      logger.info(`sube-service get Error : ${error}`);
      throw new Error(error);
    }
  },
  async store(subeData) {
    try {
      const newSube = await subes.create({
        ...subeData
      });
      return newSube
    } catch (error) {
      logger.info(`sube-service store Error : ${error}`);
      throw new Error(error);
    }
  },

  async update(SubeData) {
    try {
      const newSube = await subes.update({ ...SubeData }, { where: { id: SubeData.id } })
      return newSube
    } catch (error) {
      logger.info(`sube-service update Error : ${error}`);
      throw new Error(error);
    }
  },
  async delete(SubeData) {
    try {
      const newSube = await subes.destroy({ where: { id: SubeData.id } })
      return newUser
    } catch (error) {
      logger.info(`sube-service delete Error : ${error}`);
      throw new Error(error);
    }
  },

}


