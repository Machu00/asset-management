const express = require('express');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    res.render('index', {
        data: {
            name: req.params.Assetname,
            class: req.params.AssetClass,
            assetDate: req.params.AssetDate,
            sku: req.params.sku,
            description: req.params.description
        }
    });

    console.log(data);
});


module.exports = app;