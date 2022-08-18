"use strict";
const express=require("express");
let router=express.Router();
var cors = require('cors'),
    sql = require('mssql');


// LF ROUTES

 router
 .route("/lf/data")
 .get((req,res)=>{
    // console.log(process.env.PORT);
    sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
        // Query for this demo you will need values that will be plotted on the bars.
        //the column names should be: name, subtotal
            new sql.Request().query('select * from  [dbo].[lf_view]').then(function (recordset) {
            res.send(recordset);
        }).catch(function (err) {
            console.log(err);
        });
    }).catch(function (err) {
        console.log(err);
    });
});

// SP ROUTE
router
    .route("/sp/data")
    .get((req, res) => {
        sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from [dbo].[seller_portal_view1]').then(function (recordset) {
                res.send(recordset);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    });



// APTB ROUTE

router
    .route("/aptb/data")
    .get((req, res) => {
        sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from [dbo].[aptb_view1]').then(function (recordset) {
                res.send(recordset);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    });


// AP PAYMENT ROUTE
    router
    .route("/aptb-pay/data")
    .get((req, res) => {
        sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from [dbo].[ap_payment_view1]').then(function (recordset) {
                res.send(recordset);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    });

module.exports=router;