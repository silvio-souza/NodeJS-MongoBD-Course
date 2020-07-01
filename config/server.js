const express = require ('express');
const consing = require ('consign');
const consign = require('consign/lib/consign');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);



module.exports = app;