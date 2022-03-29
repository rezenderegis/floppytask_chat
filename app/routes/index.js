const res = require("express/lib/response");

//Como o consign já está mapeando as rotas ele só espera que façamos a exportação
module.exports = function (application) {

    application.get('/', function (req,res) {
        application.app.controllers.index.home(application, req,res);
    });


  


}
