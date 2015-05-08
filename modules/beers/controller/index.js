var Beer = require('./../model')
  , Controller = {
    create: function(req, res) {
      var dados = req.body
      , model = new Beer(dados)
      ;
      console.log(dados);
      model.save(function (err, data) {
        if (err){
          console.log('Erro: ', err);
          msg = 'Erro: ' + err;
        }
        else{
          console.log('Cerveja Inserida: ', data);
          msg = data;
        }
        res.json(msg);
      });
    }
  , retrieve: function(req, res) {
      var query = {};

      Beer.find(query, function (err, data) {
        if (err) {
          console.log('Erro: ', err);
          msg = 'Erro: ' + err;
        } else {
          console.log('Listagem: ', data);
          msg =  data;
        }
        res.json(msg);
      });
    }
  , get: function(req, res) {
      var query = {_id: req.params.id};

      Beer.findOne(query, function (err, data) {
        if (err) {
          console.log('Erro: ', err);
          msg = 'Erro: ' + err;
        } else {
          console.log('Listagem: ', data);
          msg =  data;
        }
        res.json(msg);
      });
    }
  , update: function(req, res) {
      var query = {_id: req.params.id};

      var mod = req.body;

      delete mod._id;

      Beer.update(query, mod, function (err, data) {
        if (err){
          console.log('Erro: ', err);
          msg = 'Erro: ' + err;
        }
        else{
          console.log('Cervejas atualizadas com sucesso: ', data);
          msg = data;
        }
        res.json(msg);
      });
    }
  , delete: function(req, res) {
      var query = {_id: req.params.id};

      Beer.remove(query, function(err, data) {
        if(err) {
          console.log(err);
          msg = 'Erro: ' + err;
        } else {
          console.log('Cerveja deletada com sucesso, quantidade: ', data);
          msg = data;
        }
        res.json(msg);
      });
    }
  }
  ;

module.exports = Controller;
