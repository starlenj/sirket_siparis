"use strict";
const mssql = require('mssql');

class Sefim {
    constructor(SubeAdi, dbConfig) {
        this.SubeAdi = SubeAdi;
        this.dbConfig = dbConfig;
        this.Connection(this.dbConfig)
    }
    static Connection() {
        mssql.ConnectionPool(this.dbConfig)
            .then((connection) => {
                return connection
            })
        return connection;
    }
}

