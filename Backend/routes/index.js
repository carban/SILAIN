const express = require('express');
const app = express();

const basicSearch = require('./basicSearch.js');
const filters = require('./filters.js');
const article = require('./article.js');
const map = require('./map.js');

app.use('/basic', basicSearch);
app.use('/getfilters', filters);
app.use('/article', article);
app.use('/map', map);

module.exports = app;
