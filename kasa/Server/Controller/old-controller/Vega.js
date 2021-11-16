const mssql = require('mssql');
const response = require('../Helpers/Response')
const Config = require('../config/VegaConfig')
module.exports = {
    async GetFirmaList(req, res) {
        try {
            const { host, password, username, port, dbname } = Config.vegConfig;
            await mssql.connect('mssql://' + username + ':' + password + '@' + host + '/' + dbname)
            const result = await mssql.query("SELECT * FROM TBLFIRMA")
            response.handleData(req, res, result.recordset, 'Vega:GetFirmaList')
        } catch (e) {
            response.handleError(req, res, e, 'GetFirmaList', 'Vega')
        } finally {
            mssql.close();
        }
    },
    async GetDonem(req, res) {
        try {
            const { host, password, username, port, dbname, firmaId } = Config.vegConfig;
            await mssql.connect('mssql://' + username + ':' + port + ':' + password + '@' + host + '/' + dbname)
            const result = await mssql.query("SELECT * FROM TBLDONEM WHERE FIND = " + firmaId)
            response.handleData(req, res, result.recordset, 'Vega:GetFirmaList')
        } catch (e) {
            response.handleError(req, res, e, 'GetFirmaList', 'Vega')
        } finally {
            mssql.close();
        }
    },
    async GetDepo(req, res) {
        try {
            const { host, password, username, port, dbname, firmaId } = Config.vegConfig;
            await mssql.connect('mssql://' + username + ':' + password + '@' + host + ':' + port + '/' + dbname)
            const result = await mssql.query("SELECT * FROM F0" + firmaId + "TBLDEPOLAR ")
            response.handleData(req, res, result.recordset, 'Vega:GetDepo')
        } catch (e) {
            response.handleError(req, res, e, 'GetDepo', 'Vega')
        } finally {
            mssql.close();
        }
    },
    async GetStokList(req, res) {
        try {
            const { host, password, username, port, dbname, firmaId } = Config.vegConfig;
            await mssql.connect('mssql://' + username + ':' + password + '@' + host + ':' + port + '/' + dbname)
            const result = await mssql.query(" SELECT STOK.IND AS STOKNO,BIRIM.IND as BIRIMNO,STOK.STOKKODU,STOK.MALINCINSI,BIRIM.BIRIMADI FROM F0" + firmaId + "TBLSTOKLAR  AS STOK" +
                " JOIN  F0" + firmaId + "TBLBIRIMLEREX AS BIRIM ON STOK.IND=BIRIM.STOKNO where STOK.ETICARET='TRUE' AND STOK.IND>=100 ")
            response.handleData(req, res, result.recordset, 'Vega:GetDepo')
        } catch (e) {
            response.handleError(req, res, e, 'GetDepo', 'Vega')
        } finally {
            mssql.close();
        }
    },
    async GetKasaReport(req, res) {

        try {

            const { host, password, username, port, dbname, firmaId } = Config.vegConfig;
            await mssql.connect('mssql://' + username + ':' + password + '@' + host + ':' + port + '/' + dbname);
            const { startDate, endDate, subeAdi } = req.body;
            console.log(req.body)
            const result = await mssql.query(


                " SELECT " +
                " KASA.IND, " +
                " KASA.TARIH, " +
                " KASA.EVRAKNO, " +
                " KASA.GIDER AS TLGIDER, " +
                " KASA.ACIKLAMA, " +
                " USERS.USERNAME, " +
                " KASA.EVRAKNO AS SUBE " +
                " FROM F0101D0004TBLKASA AS KASA " +
                " LEFT JOIN TBLUSERS AS USERS  ON " +
                " KASA.USERNO = USERS.IND " +
                " WHERE   KASA.TARIH  BETWEEN '" + startDate + "'  AND '" + endDate + "' " +
                " AND       KASA.ACIKLAMA NOT LIKE '%ŞEFSATIŞ%' AND        KASA.ACIKLAMA NOT LIKE '%PAKETSERVİSİ%' " +
                " AND KASA.EVRAKNO <> '' AND KASA.GELIR =0 AND KASA.EVRAKNO  LIKE '%" + subeAdi + "%' " +
                " GROUP BY " +
                " KASA.IND, " +
                " KASA.TARIH, " +
                " KASA.ISLEM, " +
                " KASA.GIDER, " +
                " KASA.ACIKLAMA, " +
                " KASA.ISLEMTIPI, " +
                " USERS.USERNAME, " +
                " KASA.SUBEADI, " +
                " KASA.KASAADI, " +
                " KASA.EVRAKNO " +
                " ORDER BY " +
                " KASA.TARIH");
            response.handleData(req, res, result.recordset, 'Vega:GetKasa')
        } catch (e) {
            response.handleError(req, res, e, 'GetKasa', 'Vega')
        } finally {
            mssql.close();
        }

    },
    async GetKasaReportTotal(req, res) {

        try {

            const { host, password, username, port, dbname, firmaId } = Config.vegConfig;

            let connection = await mssql.connect('mssql://' + username + ':' + password + '@' + host + ':' + port + '/' + dbname)
            const { startDate, endDate, subeAdi } = req.body;

            const result = await connection.request().query(

                " SELECT  " +
                " KASA.TARIH, " +
                " SUM(KASA.GIDER) AS TLGIDER " +
                " FROM F0101D0004TBLKASA AS KASA " +
                " WHERE   KASA.TARIH  BETWEEN '" + startDate + "'  AND '" + endDate + "' " +
                "  AND       KASA.ACIKLAMA NOT LIKE '%ŞEFSATIŞ%' AND        KASA.ACIKLAMA NOT LIKE '%PAKETSERVİSİ%' " +
                "  AND KASA.EVRAKNO <> '' AND KASA.GELIR = 0 AND KASA.EVRAKNO  LIKE '%" + subeAdi + "%' " +
                " GROUP BY " +
                " KASA.TARIH " +
                " ORDER BY " +
                " KASA.TARIH "

            );
            response.handleData(req, res, result.recordset, 'Vega:GetKasaToplam')
        } catch (e) {
            console.log(e);
            response.handleError(req, res, e, 'GetKasaToplam', 'Vega')
        } finally {
            mssql.close();
        }

    }
};
