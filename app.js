/** Importar as cnfigurações do servidor */
var app = require('./config/server');

/** Configurar a porta que o servidor irá escutar requisições */
app.listen(80, function () {
    console.log('Servidor online');
});