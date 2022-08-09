'use strict';

var express = require('express');
var app = express();

var lf=require("./src/routes/lfRoutes");
var sp=require("./src/routes/spRoutes");
var ofa=require("./src/routes/ofaRoutes");
var commonroute=require("./src/routes/commonroute");


var port = process.env.PORT || 5000;


//used by express first
app.use(express.static('./public'));
app.use(express.static('./src'));

//New
app.use("/lf",lf);
app.use("/sp",sp);
app.use("/ofa",ofa);
app.use("/universalcheck",commonroute);


//templating engine
app.set('views', './src/views');      
app.set('view engine', 'ejs');


app.use('/public_assets',express.static('src/assets'));


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render'
    
    });
});

// app.get('/universalcheck/:id',(req,res)=>{
// console.log(req.params);
// })

app.get('/lf', function (req, res) {
    res.render('lf', {
        title: 'Hello from render'
    
    });
});

app.get('/sp', function (req, res) {
    res.render('sp', {
        title: 'Hello from render'
    
    });
});


app.get('/aptb', function (req, res) {
    res.render('aptb.ejs', {
        title: 'Hello from render'
    
    });
});

app.get('/appayment', function (req, res) {
    res.render('aptbpayment', {
        title: 'Hello from render'
    
    });
});


app.listen(port, function () {
    console.log('running server on port ' + port) 
});