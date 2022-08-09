"use strict";
const express = require("express");
let router = express.Router();
var cors = require('cors'),
    sql = require('mssql');

router
    .route("/:id")
    .get((req, res) => {
        var queryid = req.params.id.toString();
        queryid = queryid.split('___').join('/')
        sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
            var result = {};
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query("select * from (select [Invoice Number],'LF' as portal from [dbo].[lf_view] union select [Invoice Number],'SP' as portal from [dbo].[seller_portal_view] union select [Invoice Number],'APTB' as portal from [dbo].[aptb_view] union select  CAST([INVOICE_ID] AS varchar) as [Invoice Number],'AP Payment' from [dbo].[ap_payment_view]) a where [Invoice Number]='" + queryid + "'").then(function (recordset) {

                for (var i = 0; i < recordset.length; i++) {
                    var portal = recordset[i].portal;

                    // Fetch data from AP Payment View
                    if (portal == 'AP Payment') {
                        new sql.Request().query("select * from [dbo].[ap_payment_view] where [INVOICE_ID]='" + queryid + "'").then(function (appayrecordset) {

                            if (appayrecordset.length > 0) {
                                result['Ap Payment'] = appayrecordset;

                            }

                        });
                    }
                    // Fetch data from APTB View
                    if (portal == "APTB") {
                        new sql.Request().query("select * from [dbo].[aptb_view] where [Invoice Number]='" + queryid + "'").then(function (appayrecordset) {
                            if (appayrecordset.length > 0) {
                                result['APTB'] = appayrecordset;

                            }

                        });
                    }
                    // Fetch data from LF View
                    if (portal == "LF") {
                        new sql.Request().query("select * from [dbo].[lf_view] where [Invoice Number]='" + queryid + "'").then(function (appayrecordset) {
                            if (appayrecordset.length > 0) {
                                result['LF'] = appayrecordset;

                            }
                        });
                    }
                    // Fetch data from SP View
                    if (portal == "SP") {
                        new sql.Request().query("select * from [dbo].[seller_portal_view] where [Invoice Number]='" + queryid + "'").then(function (appayrecordset) {
                            if (appayrecordset.length > 0) {
                                result['SP'] = appayrecordset;
                            }
                        });
                    }

                }
            }).then(() => {
                setTimeout(() => {
                    res.send(result);
                }, 1000);

            })
        }).catch(function (err) {
            console.log(err);
        });
    })

router
    .route("/vendor/:vendorid")
    .get((req, res) => {
        var vendorid = req.params.vendorid.toString();
        // console.log(vendorid);
        sql.connect('Server=radiare-azure.database.windows.net,1433;Database=pierian;User Id=radiare-azure;Password=Sql@2018;Encrypt=true').then(function () {
            var result = {};
            // Query for this demo you will need values that will be plotted on the bars.
            //the column names should be: name, subtotal
            new sql.Request().query(
                "select * from (select [Vendor Name],[Invoice Number],'LF' as portal from [dbo].[lf_view] union select 'dummy' as 'Vendor Name', [Invoice Number],'Sp' as portal from [dbo].[seller_portal_view] union select [Supplier Name] as 'Vendor Name' ,[Invoice Number],'APTB' as portal from [dbo].[aptb_view] union select  [SUPPLIER_NAME] as 'Vendor Name', CAST([INVOICE_ID] AS varchar) as [Invoice Number],'AP Payment' from [dbo].[ap_payment_view]) a where [Vendor Name]='" + vendorid + "'"

            ).then(function (recordset) {
                // queryid = queryid.split('___').join('/')
                // console.log(recordset);

                var portalarray=[];


               
                for (var i = 0; i < recordset.length; i++) {

                    if (portalarray.indexOf(recordset[i].portal) == -1) {
                        portalarray.push(recordset[i].portal);
                    }
                    
                }

                for (var i = 0; i < portalarray.length; i++) {
                    var portal = portalarray[i];

                    // Fetch data from AP Payment View
                    if (portal == 'AP Payment') {
                        // console.log("appay");
                        new sql.Request().query("select * from [dbo].[ap_payment_view] where [Supplier_Name]='" + vendorid + "'").then(function (appayrecordset) {

                            if (appayrecordset.length > 0) {
                                result['Ap Payment'] = appayrecordset;
                                
                            } 

                        });
                    }
                    // Fetch data from APTB View
                    if (portal == "APTB") {
                        // console.log("ap");
                        new sql.Request().query("select * from [dbo].[aptb_view] where [Supplier Name]='" + vendorid + "'").then(function (appayrecordset) {
                            if (appayrecordset.length > 0) {
                                result['APTB'] = appayrecordset;

                            }

                        });
                    }
                    // Fetch data from LF View
                    if (portal == "LF") {
                        new sql.Request().query("select * from [dbo].[lf_view] where [Vendor Name]='" + vendorid + "'").then(function (appayrecordset) {
                            if (appayrecordset.length > 0) {
                                result['LF'] = appayrecordset;

                            }
                        });
                    }
                    // Fetch data from SP View
                    // if (portal == "SP") {
                    //     new sql.Request().query("select * from [dbo].[seller_portal_view] where [Invoice Number]='" + queryid + "'").then(function (appayrecordset) {
                    //         if (appayrecordset.length > 0) {
                    //             result['SP'] = appayrecordset;
                    //         }
                    //     });
                    // }

                }
            }).then(() => {
                setTimeout(() => {
                    res.send(result);
                }, 5000);

            })

        })
    })

module.exports = router;
