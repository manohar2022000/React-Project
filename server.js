'use strict';
const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.set('view engine', 'ejs');
//Routes
app.use('/public_assets',express.static('src/assets'));
app.use('/', require('./routes/main'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server don start for port: " + PORT))