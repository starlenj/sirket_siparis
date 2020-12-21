const response = require("../Helpers/Response");
const mssql = require("mssql");
const { timeout } = require("cron");
const { connection } = require("mongoose");

module.exports = {
  async GetConnection(SubeAdi) {
    let config = {};
    try {
      if (SubeAdi === "") {
        config = {
          host: "85.105.113.179",
          password: "vega1234",
          username: "sa",
          port: 5353,
          dbname: "hmbrgrdbson",
        };
      }
    } catch (e) {
      console.error(e);
    } finally {
      mssql.close();
    }
  },

  async GetCiro(req, res, next) {
    try {
      const { data, startDate, endDate } = req.body;
      let connection = await mssql.connect(
        "mssql://" +
          data.username +
          ":" +
          data.password +
          "@" +
          data.host +
          ":" +
          data.port +
          "/" +
          data.dbname
      );
      const sorgu =
        "  SELECT  " +
        "   SUM(CashPayment)+(select SUM(CashPayment)  FROM Collect where PaymentTime between '" +
        startDate +
        "  00:00'  and '" +
        endDate +
        "  23:59') AS NAKIT, " +
        "  SUM(CreditPayment)+(select SUM(CreditPayment)  FROM Collect where PaymentTime between '" +
        startDate +
        "  00:00' and '" +
        endDate +
        " 23:59') as KREDI, " +
        "  SUM(TicketPayment)+(select SUM(TicketPayment)  FROM Collect where PaymentTime between '" +
        startDate +
        "  00:00' and  '" +
        endDate +
        "  23:59' and SubType='') as TICKET, " +
        " (select SUM(TicketPayment)  FROM Collect where PaymentTime between '" +
        startDate +
        "  00:00' and '" +
        endDate +
        "  23:59' and SubType='YemekSepeti') as YEMEKSEPETI " +
        "  FROM  Payment as Payment " +
        "  where PaymentTime between '" +
        startDate +
        " 00:00' and '" +
        endDate +
        "  23:59' Group BY FORMAT(PaymentTime,'yyyy.MM.dd') ORDER BY FORMAT(PaymentTime,'yyyy.MM.dd')  ";

      let query = await connection.request().query(
        /*  "SELECT sum(CashPayment) as NAKIT , sum(CreditPayment) as KREDI ,sum(TicketPayment) as TICKET FROM Payment where PaymentTime between '" +
              startDate +
              " 00:00'  and  '" +
              endDate +
              " 23:59' "*/
        sorgu
      );
      response.handleData(req, res, query.recordset);
    } catch (error) {
      response.handleError(req, res, error, "List", "GetSubeCiro");
    } finally {
      mssql.close();
    }
  },
  async GetToplamCiro(req, res) {
    try {
      const { data, startDate, endDate } = req.body;
      const config = {
        user: data.username,
        password: data.password,
        server: data.host,
        database: data.dbname,
        port: parseInt(data.port),
        requestTimeout: 90000,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 90000,
        },
      };
      let connection = await new mssql.ConnectionPool(config);
      let Sorgular = await connection.connect();

      let Sonuc = await Sorgular.request().query(
        " select  " +
          " SUM(T.KREDI) AS KREDI, " +
          " SUM(T.NAKIT) AS NAKIT, " +
          " SUM(T.YEMEKCEKI) AS YEMEKCEKI, " +
          " SUM(T.YEMEKSEPETI) as YEMEKSEPETI, " +
          " TARIH " +
          " from (SELECT  " +
          " FORMAT(PaymentTime,'yyyy.MM.dd') as TARIH , " +
          " SUM(CashPayment) as NAKIT,  " +
          " SUM(CreditPayment)as KREDI, " +
          " 0 AS YEMEKSEPETI," +
          " SUM(TicketPayment) as YEMEKCEKI " +
          " FROM Payment " +
          "   where PaymentTime   between '" +
          startDate +
          " 00:00' and '" +
          endDate +
          " 23:59'  " +
          " Group BY FORMAT(PaymentTime,'yyyy.MM.dd') " +
          " UNION SELECT " +
          " FORMAT(PaymentTime,'yyyy.MM.dd') as TARIH , " +
          " SUM(CashPayment) as NAKIT,  " +
          " SUM(CreditPayment)as KREDI, " +
          " CASE  WHEN SubType='YemekSepeti' " +
          " THEN SUM(TicketPayment) end as YEMEKSEPETI, " +
          " CASE  WHEN SubType='' " +
          " THEN SUM(TicketPayment) end as YEMEKECEKI " +
          " FROM Collect " +
          "  where PaymentTime   between '" +
          startDate +
          " 00:00'  and '" +
          endDate +
          " 23:59 '  " +
          " group by " +
          " FORMAT(PaymentTime,'yyyy.MM.dd'), " +
          " SubType " +
          " ) " +
          " as T " +
          " GROUP BY " +
          " T.TARIH " +
          " ORDER BY " +
          " T.TARIH "
      );
      console.log(Sonuc.recordsets);
      response.handleData(req, res, Sonuc.recordset);
    } catch (error) {
      response.handleError(req, res, error, "List", "GetSubeToplamCiro");
    } finally {
    }
  },
};
