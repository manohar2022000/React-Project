"use strict";
const express = require("express");
const config = require("../config/dbconfig");
let router = express.Router();
var cors = require('cors'),
    sql = require('mssql');
// LF ROUTES

var conn = require('../config/dbconnection');
router
    .route("/lf/data")
    .get((req, res) => {
        // console.log(process.env.PORT);
        sql.connect(config).then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from  [dbo].[view_lf]').then(function (recordset) {
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
        sql.connect(config).then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from [dbo].[view_seller_portal]').then(function (recordset) {
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
        sql.connect(config).then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from [dbo].[view_aptb]').then(function (recordset) {
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
        sql.connect(config).then(function () {
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query('select * from [dbo].[view_ap_payment]').then(function (recordset) {
                res.send(recordset);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    });
module.exports = router;