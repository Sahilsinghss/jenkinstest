var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Thetips4you" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.get('/sahil', function (req, res) {
    res.send('{ "response": " Great!, Hello Sahil" }');
});
app.get('/kislay', function (req, res) {
    res.send('{ "response": " Great!, Hello kislay" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
