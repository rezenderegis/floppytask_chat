/** Importar o módulos */

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//Inicia o objeto do express
var app = express(); //É essa instância que o app.js está esperando

//Configurar EJS. Popular as variáveis 'view engine' e 'views'.
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configurar o middleware express.static
app.use(express.static('./app/public'));

//Configurar middleware body-parser.Facilita a recuperação de dados de formulário via json
app.use(bodyParser.urlencoded({extended : true}));

//Configuar o middleware express-validator
app.use(expressValidator());

/*Configurar consign para fazer autoload de arquivos de rotas,models 
e controllers para o objeto app
*/
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);



//Exporta ojeto do express
module.exports = app;

/**
Configurar EJS
Configurar mddleware do express static pra dizer onde estão assets. dos arquvos estaivos
Body parser 
Express validator
Autoload para rotas, models e controllers

 */