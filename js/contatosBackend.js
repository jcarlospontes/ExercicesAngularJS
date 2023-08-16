var express = require('express');
var multer = require('multer'); // Import multer

var app = express();
var upload = multer(); // Initialize multer instance

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var registros = [
    {serial: "%/42=\\FNO-" ,nome: "João", telefone: "99999999", idade: "18", data: new Date(), operadora:{nome: "Vivo", codigo: "12"} , status:false},
    {serial: "WS2SXV[$L/",nome: "Pedro", telefone: "99999998", idade: "44", data: new Date(), operadora:{nome: "Claro", codigo: "12"} , status:false},
    {serial:"OIU^37W_[Z" ,nome: "Ana", telefone: "99999997", idade: "32", data: new Date(), operadora:{nome: "Tim", codigo: "12"} , status:false}
];
var operadoras = [
    {nome: "Tim", codigo: "11"},
    {nome: "Claro", codigo: "12"},
    {nome: "Vivo", codigo: "13"}
];

app.listen(process.env.PORT || 3412);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/registros', function(req, res) {
    res.json(registros);
});
app.post('/registros', function(req, res) {
    registros.push(req.body);
    res.json(true);
});

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
});