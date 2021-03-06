const sqlDb = require('mssql');
const settings = require('../settings');

exports.executeSql = function (sql, callback) {
    var conn = new sqlDb.ConnectionError(settings.dbconfig);
    conn.connect()
    .then(function () {
        var req = new sqlDb.Request(conn);
        req.query(sql)
        .then(function (recordset){
            callback(recordset);
        })
        .catch(function (err){
            console.log(err);
            callback(null, err);
        })
    })
    .catch(function (err){
        console.log(err);
        callback(null, err);
    })
}
