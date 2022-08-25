const config=require("./dbconfig");
var cors = require('cors'),
    sql = require('mssql');
class myobj{
    connecttodb(sqlquery){
        sql.connect(config).then(function () {
            new sql.Request().query(sqlquery).then(function (recordset) {
                return recordset;
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });

    }
}
module.exports.myobj=myobj;
    
    
    




