"use strict";
const express=require("express");
let router=express.Router();
var cors = require('cors'),
    sql = require('mssql');

router
 .route("/vendors")
 .get((req,res)=>{
    
    sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
        // Query for this demo you will need values that will be plotted on the bars.
        //the column names should be: name, subtotal
        // new sql.Request().query('select Distinct([Supplier Name]) from APTB').then(function (recordset) {
            new sql.Request().query('select Distinct([Vendor Name]) from [dbo].[lf_view]').then(function (recordset) {
            // console.log(recordset); 
            // exit();
            res.send(recordset);
        }).catch(function (err) {
            console.log(err);
        });

    }).catch(function (err) {
        console.log(err);
    });
 }
 );
 router
 .route("/invoices")
 .get((req,res)=>{
    sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
        // Query for this demo you will need values that will be plotted on the bars.
        //the column names should be: name, subtotal
        // new sql.Request().query('select Distinct([Seller Name]) from APTB').then(function (recordset) {
            
            new sql.Request().query('select Distinct([Invoice Number]) from [dbo].[lf_view]').then(function (recordset) {
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
 .route("/data")
 .get((req,res)=>{
    // console.log(process.env.PORT);
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

router
.route("/sellers")
.get((req,res)=>{
    sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
        // Query for this demo you will need values that will be plotted on the bars.
        //the column names should be: name, subtotal
        // new sql.Request().query('select Distinct([Seller Name]) from APTB').then(function (recordset) {
            
            new sql.Request().query('select Distinct([Seller Name]) from [dbo].[lf_view]').then(function (recordset) {
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
.route("/search")
.get((req,res)=>{
    sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
        // Query for this demo you will need values that will be plotted on the bars.
        //the column names should be: name, subtotal
        // new sql.Request().query('select Distinct([Seller Name]) from APTB').then(function (recordset) {
            
            // new sql.Request().query("select [Vendor Name],[Invoice Number],'LF' as portal from [dbo].[lf_view] union select [Vendor Name], [Invoice Number],'Sp' as portal from [dbo].[seller_portal_view1] union select [Vendor Name] as 'Vendor Name' ,[Invoice Number],'APTB' as portal from [dbo].[aptb_view1] union select  [Vendor Name], CAST([Invoice Number] AS varchar),'AP Payment' from [dbo].[ap_payment_view1]").then(function (recordset) {
                    new sql.Request().query("select * from [dbo].[master_search]").then(function (recordset) {
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
