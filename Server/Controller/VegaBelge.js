const mssql = require('mssql')
const Sepet = require('../models/Sepet')
const vegaConfig = require('../config/Config')
/*
Önce Sipariş çekilir daha sonra 
stok no birim noları kontrol edili var mı diye
daha sonra cari si kontrol edilir ve cari no alınır 
(sipariş fişi) olarak aktarılır 
*/

    /*Vega bağlantı alma yönetimi 
    */
    async function  GetConnection() {
        const dbConfig = {
            user: vegaConfig.vegConfig.username,
            password: vegaConfig.vegConfig.password,
            server: vegaConfig.vegConfig.host, // You can use 'localhost\\instance' to connect to named instance
            database: vegaConfig.vegConfig.dbname,
            port : vegaConfig.vegConfig.port,
            options: {
                encrypt: false, // Use this if you're on Windows Azure

            }
        }
        connection = await new mssql.ConnectionPool(dbConfig).connect()
        return connection
    }
    /*
        Main method sıralaması
        daha sonra carisini çek olmayan varsa aç
        önce ALSIPBASLIK sonra ALSIPHAREKET 
        gerekli olan parametreler
        başlık => ['date','hedefDepo']
        hareket => ['date','baslikId','STOKNO','MALINCINSI','STOKKODU,'STOKTIPI','MIKTAR','BIRIMADI','BIRIMNO']
    */
   module.exports={
    async   Main(req, res, kaynakDepo,hedefDepo) {
        //önce başlık kısmını ekle
     
        try {
           /* const data = { 
                date: req.body.created_at, 
                hedefDepo: hedefDepo,
                STOKNO:req.body.stokNo,
                MALINCINSI:req.body.malinCinsi,
                STOKKODU:req.body.stokKodu,
                
                MIKTAR:req.body.miktar,
                BIRIMADI:req.body.birimAdi,
                BIRIMNO:req.body.birimNo,
                kaynakDepo : kaynakDepo
            };

            const kaynak = { 
                date: req.body.created_at, 
              
                STOKNO:req.body.stokNo,
                MALINCINSI:req.body.malinCinsi,
                STOKKODU:req.body.stokKodu,
               
                MIKTAR:-1*(req.body.miktar),
                BIRIMADI:req.body.birimAdi,
                BIRIMNO:req.body.birimNo,
                DEPO : kaynakDepo
            };


            const hedef = { 
                date: req.body.date, 
                DEPO: hedefDepo ,
                STOKNO:req.body.stokNo,
                MALINCINSI:req.body.malinCinsi,
                STOKKODU:req.body.stokKodu,
                MIKTAR:req.body.miktar,
                BIRIMADI:req.body.birimAdi,
                BIRIMNO:req.body.birimNo,
                
            };
           
           */
          const data = { 
            date: req.body[0].created_at, 
            hedefDepo: hedefDepo,
           
            kaynakDepo : kaynakDepo
        };
        const hareket =  req.body

            let depoBaslik = await DepoHarBaslik(data)
            if(depoBaslik.rowsAffected[0]>0)
                {
                    hareket.forEach(async (data) => {
                        let depoHareket = await DepoHarHareket(data,depoBaslik.recordset[0].lastId)
                        if(depoHareket.rowsAffected[0]>0)
                        {
                            const kaynak = { 
                                date:data.created_at, 
                              
                                STOKNO:req.body.stokNo,
                                MALINCINSI:req.body.malinCinsi,
                                STOKKODU:req.body.stokKodu,
                               
                                MIKTAR:-1*(req.body.miktar),
                                BIRIMADI:req.body.birimAdi,
                                BIRIMNO:req.body.birimNo,
                                DEPO : kaynakDepo
                            };
                            let kaynakDepoEnvanter = await DepoEnvanter(kaynak,depoBaslik.recordset[0].lastId,depoHareket.recordset[0].lastId)
                            if(kaynakDepoEnvanter.rowsAffected>0)
                            {
                                
                                let hedefDepoEnvanter = await DepoEnvanter(data,depoBaslik.recordset[0].lastId,depoHareket.recordset[0].lastId)
                                if(hedefDepoEnvanter.rowsAffected>0)
                                {
                                    res.status(200).send('HEDEF TAMAM')
                                }
                            }
                        } 
                    });
           
                
            } 
        } catch (error) {
            console.log(error)
        }
       
        
    }
}

    async function  DepoHarBaslik(data) {
       var belgeNo =  Math.floor((Math.random() * 1000) + 1)
        try {
            let connection = await GetConnection()
            let query = await connection.request()
                .input('FIRMAADI', 'NULL')
                .input('TUTAR', 1)
                .input('BELGENO', 'SIPARIS'+belgeNo)
                .input('TARIH', data.date)
                .input('KDV', 0)
                .input('AK', 0)
                .input('HAREKETDEPOSU', data.kaynakDepo)
                .input('ODEMETARIHI', data.date)
                .input('ALTBELGENO', '')
                .input('ALTBELGETARIHI', '')
                .input('ALT1', '0')
                .input('ALT2', '0')
                .input('ALT3', '0')
                .input('ALT4', '0')
                .input('DEPO', data.hedefDepo)
                .input('OZELKOD1', 'MERKEZ')
                .input('OZELKOD2', 'MERKEZ')
                .input('IADE', false)
                .input('IPTAL', false)
                .input('CONVERTED', false)
                .input('PARABIRIMI', 'TL')
                .input('KUR', 1)
                .input('YUVARLAMA', 0)
                .input('ALLOWYUVARLAMA', 0)
                .input('ODENEN', 0)
                .input('GIRIS', 1)
                .input('BELGETIPI', '37')
                .input('CARIHAREKETEYAZ', 1)
                .input('STOKHAREKETEYAZ', 1)
                .query("INSERT INTO F0" + vegaConfig.vegConfig.firmaId + 'D000' + vegaConfig.vegConfig.donemId + 'TBLDEPOHARBASLIK' +
                    ' (HAREKETDEPOSU,FIRMAADI,TUTAR,BELGENO,TARIH,KDV,AK,ODEMETARIHI,ALTBELGENO,ALTBELGETARIHI,ALT1,ALT2,ALT3,ALT4,DEPO,OZELKOD1,OZELKOD2,'
                    + 'IADE,IPTAL,CONVERTED,PARABIRIMI,KUR,YUVARLAMA,ALLOWYUVARLAMA,ODENEN,GIRIS,BELGETIPI,STOKHAREKETEYAZ,CARIHAREKETEYAZ) VALUES(@HAREKETDEPOSU,@FIRMAADI,@TUTAR,@BELGENO,@TARIH,@KDV,@AK,@ODEMETARIHI,@ALTBELGENO,@ALTBELGETARIHI,@ALT1,@ALT2,@ALT3,@ALT4,@DEPO,@OZELKOD1,@OZELKOD2,' +
                    '@IADE,@IPTAL,@CONVERTED,@PARABIRIMI,@KUR,@YUVARLAMA,@ALLOWYUVARLAMA,@ODENEN,@GIRIS,@BELGETIPI,@STOKHAREKETEYAZ,@CARIHAREKETEYAZ);SELECT SCOPE_IDENTITY() as lastId')
            return query;

        } catch (error) {
                console.error(error)
        }
    }
    async function  DepoHarHareket(data, baslikId) {
        try {
            let connection = await GetConnection()
            let query = await connection.request()
                .input('DETAY', 0)

                .input('SELECTED', 0)
                .input('TARIH', data.date)
                .input('KDV', 0)
                .input('BIRIMMIKTAR', 1)
                .input('SERIMIKTAR', 1)
                .input('GRUPMIKTAR', 1)
                .input('EVRAKNO', baslikId)
                .input('FIRMANO', 0)
                .input('STOKNO', data.STOKNO)
                .input('MALINCINSI', data.MALINCINSI)
                .input('STOKKODU', data.STOKKODU)
                .input('STOKTIPI', data.STOKTIPI)
                .input('MIKTAR', data.MIKTAR)
                .input('BIRIM', data.BIRIMADI)
                .input('BIRIMEX', data.BIRIMNO)
                .input('ISK1', 0)
                .input('ISK2', 0)
                .input('ISK3', 0)
                .input('ISK4', 0)
                .input('AFIYATI', 0)
                .input('FIYATI', 0)
                .input('GERCEKTOPLAM', 0)
                .input('DEPO', data.kaynakDepo)
                .input('KUR', 1)
                .input('PARABIRIMI', 'TL')
                
                .input('GK','-689481156')

                .query("INSERT INTO F0" + vegaConfig.vegConfig.firmaId + 'D000' + vegaConfig.vegConfig.donemId + 'TBLDEPOHARHAREKET' +
                    ' (GRUPMIKTAR,SERIMIKTAR,BIRIMMIKTAR,DETAY,SELECTED,TARIH,KDV,EVRAKNO,FIRMANO,STOKNO,MALINCINSI,STOKKODU,ISK1,ISK2,ISK3,ISK4,STOKTIPI,MIKTAR,'
                    + 'BIRIM,BIRIMEX,AFIYATI,FIYATI,GERCEKTOPLAM,DEPO,KUR,PARABIRIMI,GK) VALUES(@GRUPMIKTAR,@SERIMIKTAR,@BIRIMMIKTAR,@DETAY,@SELECTED,@TARIH,@KDV,@EVRAKNO,@FIRMANO,@STOKNO,@MALINCINSI,@STOKKODU,@ISK1,@ISK2,@ISK3,@ISK4,@STOKTIPI,@MIKTAR,' +
                    '@BIRIM,@BIRIMEX,@AFIYATI,@FIYATI,@GERCEKTOPLAM,@DEPO,@KUR,@PARABIRIMI,@GK);SELECT SCOPE_IDENTITY() as lastId')
            return query;

        } catch (error) {
                console.error(error)
        }
    }
    async function DepoEnvanter(data,baslikId,hareketId)
    {
        try {
            let connection = await GetConnection()
            let query = await connection.request()
                .input('TARIH', data.date)
                .input('STOKNO', data.STOKNO)  
                .input('ENVANTER', data.MIKTAR)    
                .input('BELGEIND', baslikId)
                .input('DEPO', data.DEPO)
                .input('HAREKETIND', hareketId)
                .input('BELGETIPI', '37')
                .input('SIRALAMATARIHIEX','43687.54592582')
                .query("INSERT INTO F0" + vegaConfig.vegConfig.firmaId + 'D000' + vegaConfig.vegConfig.donemId + 'TBLDEPOENVANTER' +
                    ' (TARIH,STOKNO,ENVANTER,DEPO,BELGEIND,HAREKETIND,BELGETIPI,SIRALAMATARIHIEX'
                    + ') VALUES(@TARIH,@STOKNO,@ENVANTER,@DEPO,@BELGEIND,@HAREKETIND,@BELGETIPI,@SIRALAMATARIHIEX)')
            return query;

        } catch (error) {
                console.error(error)
        }
    }


