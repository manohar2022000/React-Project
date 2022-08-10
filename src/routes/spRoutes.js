"use strict";
const express=require("express");
let router=express.Router();
var cors = require('cors'),
    sql = require('mssql');
    
 router
 .route("/data")
 .get((req,res)=>{
    sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
        // Query for this demo you will need values that will be plotted on the bars.
        //the column names should be: name, subtotal
        // new sql.Request().query('select top 500 * from APTB order by [due date] desc').then(function (recordset) {
            new sql.Request().query('select * from [dbo].[seller_portal_view1]').then(function (recordset) {
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


router
.route("/invoices")
.get((req,res)=>{
   sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
       // Query for this demo you will need values that will be plotted on the bars.
       //the column names should be: name, subtotal
       // new sql.Request().query('select Distinct([Seller Name]) from APTB').then(function (recordset) {
           
           new sql.Request().query('select Distinct([Invoice Number]) from [dbo].[seller_portal_view]').then(function (recordset) {
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

module.exports=router;
