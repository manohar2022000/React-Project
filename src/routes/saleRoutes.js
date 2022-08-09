const { easeExpInOut } = require('d3')
// require("dotenv").config()
var cors = require('cors'),
    express = require('express'),
    saleRouter = express.Router(),
    sql = require('mssql');
    

saleRouter.all('*', cors());

var getSales = function () {

    saleRouter.route('/')
        .get(function (req, res) {

            sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
                // Query for this demo you will need values that will be plotted on the bars.
                //the column names should be: name, subtotal
                // new sql.Request().query('select top 500 * from APTB order by [due date] desc').then(function (recordset) {
                    new sql.Request().query('select * from  [dbo].[lf_view]').then(function (recordset) {
                    // console.log(recordset);
                    // exit();
                    res.send(recordset);
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        });

    return saleRouter;

};

module.exports = {
    getSales: getSales
};
