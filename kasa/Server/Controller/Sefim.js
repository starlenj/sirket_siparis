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

  async GetUrunBazliSatisRaporu(req, res) {
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
        ` WITH base as ( 
          SELECT
            Date,
            Quantity,
            LTRIM(RTRIM(split.s)) AS Opt,
            ProductId
          FROM
            dbo.Bill
          CROSS APPLY
            dbo.Split(',',Bill.Options)  as split
          WHERE
            ISNULL(Options,'')<>''  AND Date>=${startDate} AND Date<=${endDate}
            ),
          base_with_optqty as (
          SELECT 
            base.Date,
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
            Date,
            ProductId,
            Quantity * (CASE WHEN ISNUMERIC(OptQty) = 1 THEN CAST(OptQty AS INT) ELSE 1 END ) AS Quantity,	
            Opt as ProductName
          from
            base_with_optqty	
          )
          select * from (
          
          SELECT 
          
          sum(Quantity) as Toplam,
          ProductName,
          'Seçenekler' AS ProductGroup,
          0 as Tutar,
          0 as OPENTABLE,
          0 AS OPENTABLEQuantity,
          0 as Discount
          from  satislar
          group by satislar.ProductName
          
          UNION
          
          
          select 
          sum(t.toplam) as Toplam,
          t.ProductName,
          t.ProductGroup,
          sum(t.tutar) as Tutar,
          SUM(ISNULL(T.OPENTABLE,0)) AS OPENTABLE,
          SUM(ISNULL(OPENTABLEQuantity,0)) OPENTABLEQuantity,
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
            FROM dbo.Bill AS B
          
          LEFT JOIN dbo.Product as P ON P.Id=B.ProductId
          
          
          
           
           
          WHERE
          [Date]>=${startDate} AND [Date]<=${endDate}
          
          
          GROUP BY B.ProductName,
          P.ProductGroup,
          B.HeaderId,
          p.Id ) as t
          group by
          t.ProductName,
          t.ProductGroup,
          t.ProductId ) as a
          order by
          a.ProductGroup `
      );
      console.log(Sonuc.recordsets);
      response.handleData(req, res, Sonuc.recordset);
    } catch (error) {
      response.handleError(req, res, error, "List", "GetUrunBazliSatisRaporu");
    } finally {
    }
  },
};
