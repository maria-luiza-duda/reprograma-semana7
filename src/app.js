const express = require('express');
const app = express();

const index = require('./route/index');
const sppCirripedia = require('./route/sppCirripediaRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/sppCirripedia', sppCirripedia);

module.exports = app;