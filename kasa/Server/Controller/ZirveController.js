const sql = require("mssql");
const Config = require("../config/Zirve");
module.exports = {
  async BirGunSonraDogumGunu() {
    try {

      const config = {
        user: "sa",
        password: "vega1234",
        server: "78.187.125.240",
        port: 4444,
        database: "SAVER_İÇ_VE_DIŞ_TİC_LTD_ŞTİ_GENEL",
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000
        }
      };


      let connection = await new sql.ConnectionPool(config).connect();

      let query = await connection
        .request()
        .query(
          " SELECT Ad, Adsoyad, Dt, DATENAME(day, Dt) as gun, MONTH(Dt) as AY " +
          " FROM perbilgi " +
          " where Ict is null and Dt is not null  and DATENAME(day, Dt) = DATENAME(day, DATEADD(day, +1, GETDATE())) " +
          " and MONTH(Dt) = MONTH(GETDATE()) and Grupkodu = 'imalat' " +
          " order by Dt "
        );

      return query;
    } catch (e) {
      console.error(e);
    }
  },
  async BugunDogumGunu() {
    try {

      const config = {
        user: "sa",
        password: "vega1234",
        server: "78.187.125.240",
        port: 4444,
        database: "SAVER_İÇ_VE_DIŞ_TİC_LTD_ŞTİ_GENEL",
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000
        }
      };

 console.log(config);
      let connection = await new sql.ConnectionPool(config).connect();

      let query = await connection
        .request()
        .query(
          " SELECT Ad, Adsoyad, Dt, DATENAME(day, Dt) as gun, MONTH(Dt) as AY " +
          " FROM perbilgi " +
          " where Ict is null and Dt is not null  and DATENAME(day, Dt) = DATENAME(day,GETDATE()) " +
          " and MONTH(Dt) = MONTH(GETDATE()) and Grupkodu = 'imalat' " +
          " order by Dt "
        );

      return query;
    } catch (e) {
      console.error(e);
    }
  }
};
