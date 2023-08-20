var express = require('express');
var multer = require('multer'); // Import multer

var app = express();
var upload = multer(); // Initialize multer instance

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var registros = [
    {id:1, serial: "%/42=\\FNO-" ,nome: "João", telefone: "(85) 9 8787-8787", idade: "18", data: new Date(), operadora:{nome: "Vivo", codigo: "12", preco:3} , status:false},
    {id:2, serial: "WS2SXV[$L/",nome: "Pedro", telefone: "(85) 3232-3232", idade: "44", data: new Date(), operadora:{nome: "Claro", codigo: "12", preco:1} , status:true},
    {id:3, serial:"OIU^37W_[Z" ,nome: "Ana", telefone: "(11) 9 8332-3232", idade: "32", data: new Date(), operadora:{nome: "Tim", codigo: "12", preco:2} , status:false}
];
var operadoras = [
    {nome: "Tim", codigo: "11", preco:2},
    {nome: "Claro", codigo: "12", preco:1},
    {nome: "Vivo", codigo: "13", preco:3}
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

app.get('/registros/:id', function(req, res) {
    res.json(registros.find(c => c.id == req.params.id));
});

app.post('/registros', function(req, res) {
    registros.push(req.body);
    res.json(true);
});

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
});