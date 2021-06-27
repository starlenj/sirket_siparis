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

  },
  async UrunBazliSatis(req, res) {


    try {
      const {
        data,
        startDate,
        endDate
      } = req.body;


      let connection = await mssql.connect('mssql://' + data.username + ':' + data.password + '@' + data.host + ':' + data.port + '/' + data.dbname)
      let Sorgular = await connection.connect()
      const sorgu = `WITH base as (
        SELECT
          PaymentTime,
          Quantity,
          LTRIM(RTRIM(split.s)) AS Opt,
          ProductId
        FROM
          ${data.dbname}.dbo.PaidBill
        CROSS APPLY
          armadarepdb.dbo.Split(',',PaidBill.Options)  as split
        WHERE
          ISNULL(Options,'')<>'' AND PaymentTime>='${startDate} 07:00 ' AND PaymentTime <= '${endDate} 00:00'
          ),
        base_with_optqty as (
        SELECT 
          base.PaymentTime,
          base.Quantity,
          ProductId,
          CASE 
            WHEN CHARINDEX('x',base.Opt) > 0 THEN
            SUBSTRING(base.Opt,1,CHARINDEX('x',base.Opt)-1)
          ELSE
            '1'
          END AS OptQty,
          
          CASE 
            WHEN CHARINDEX('x',base.Opt) > 0 THEN
            SUBSTRING(base.Opt,CHARINDEX('x',base.Opt)+1,100)
          ELSE
            base.Opt
          END AS Opt	
        FROM 
          base),
          
        satislar as (	
        SELECT	
          PaymentTime,
          ProductId,
          Quantity * (CASE WHEN ISNUMERIC(OptQty) = 1 THEN CAST(OptQty AS INT) ELSE 1 END ) AS Quantity,	
          Opt as ProductName
        from
          base_with_optqty	
        )
        select * from (
        
        SELECT 
        
        sum(Quantity) as Miktar,
        ProductName as UrunAdi,
        'Seçenekler' AS UrunGrubu,
        0 as Tutar,
        0 as Discount
        from  satislar
        group by satislar.ProductName
        
        UNION
        
        
        select 
        sum(t.toplam) as Miktar,
        t.ProductName as UrunAdi,
        t.ProductGroup as UrunGrubu,
        sum(t.tutar) as Tutar,
        SUM(T.Discount) as Discount from (
        SELECT 
        P.Id as ProductId,
        SUM(B.Quantity) AS Toplam,B.ProductName,P.ProductGroup,SUM(ISNULL(B.Quantity,0) * ISNULL(B.Price,0)) AS Tutar,
        
        (SELECT SUM(Bill.Price*Bill.Quantity) FROM dbo.BillWithHeader AS Bill WHERE BillState=0
        and HeaderId=b.HeaderId AND ProductId=P.Id
        ) AS OPENTABLE,
        (SELECT SUM(Bill.Quantity) FROM dbo.BillWithHeader AS Bill WHERE BillState=0
        and HeaderId=b.HeaderId AND ProductId=P.Id
        ) AS OPENTABLEQuantity,
        (SELECT SUM(PAY.Discount) FROM dbo.Payment AS PAY
        where PAY.HeaderId=B.HeaderId
        ) as Discount
          FROM ${data.dbname}.dbo.Bill AS B
        
        LEFT JOIN ${data.dbname}.dbo.Product as P ON P.Id=B.ProductId
        
        WHERE
        [Date]>='${startDate} 07:00' AND [Date]<='${endDate} 00:00'
        
         
        
        
        
        GROUP BY B.ProductName,
        P.ProductGroup,
        B.HeaderId,
        p.Id ) as t
        group by
        t.ProductName,
        t.ProductGroup,
        t.ProductId ) as a
        order by
        a.UrunGrubu `
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



