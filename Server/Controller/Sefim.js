const response = require("../Helpers/Response");
const mssql = require("mssql");
const { timeout } = require("cron");
const { connection } = require("mongoose");

module.exports = {
  async GetConnection(SubeAdi) {
    let config = {};
    try {
      if (SubeAdi === '') {
        config = {
          host: '85.105.113.179',
          password: 'vega1234',
          username: 'sa',
          port: 5353,
          dbname: 'hmbrgrdbson'
        }

      }


    } catch (e) {
      console.error(e)
    } finally {
      mssql.close();
    }
  },


  async GetCiro(req, res, next) {
    try {
      const {
        data,
        startDate,
        endDate
      } = req.body;

      let connection = await mssql.connect('mssql://' + data.username + ':' + data.password + '@' + data.host + ':' + data.port + '/' + data.dbname)
      const sorgu = " SELECT    " +
        " SUM(Payment.CashPayment) as NAKIT, " +
        " SUM(Payment.CreditPayment) AS KREDI, " +
        "  SUM(Payment.OnlinePayment) AS YEMEKSEPETI, " +
        "   SUM(Payment.TicketPayment)  AS TICKET " +
        "           FROM  Payment as Payment   " +
        "           where PaymentTime between   '" + startDate + "  00:00' and  '" + endDate + "    23:59' " +
        "      Group BY FORMAT(Payment.PaymentTime,'yyyy.MM.dd')  " +
        "     ORDER BY FORMAT(Payment.PaymentTime,'yyyy.MM.dd')  "

      let query = await connection
        .request()
        .query(
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
    }
    finally {
      mssql.close();

    }
  },
  async GetToplamCiro(req, res) {


    try {
      const {
        data,
        startDate,
        endDate
      } = req.body;


      let connection = await mssql.connect('mssql://' + data.username + ':' + data.password + '@' + data.host + ':' + data.port + '/' + data.dbname)
      let Sorgular = await connection.connect()
      const sorgu = " SELECT    " +
        " SUM(Payment.CashPayment) as NAKIT, " +
        " SUM(Payment.CreditPayment) AS KREDI, " +
        "  SUM(Payment.OnlinePayment) AS YEMEKSEPETI, " +
        "   SUM(Payment.TicketPayment)  AS YEMEKCEKI " +
        "           FROM  Payment as Payment   " +
        "           where PaymentTime between   '" + startDate + "  00:00' and  '" + endDate + "    23:59' " +
        "      Group BY FORMAT(Payment.PaymentTime,'yyyy.MM.dd')  " +
        "     ORDER BY FORMAT(Payment.PaymentTime,'yyyy.MM.dd')  "
      let Sonuc = await Sorgular.request()
        .query(
          sorgu
        );

      response.handleData(req, res, Sonuc.recordset);
    } catch (error) {
      response.handleError(req, res, error, "List", "GetSubeToplamCiro");
    }
    finally {

      mssql.close();
    }

  }
}



