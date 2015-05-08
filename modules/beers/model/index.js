var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-be-mean-abril-2015');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.on('open', function () {
  console.log('Conexão aberta.')
});
db.on('connected', function(err){
    console.log('Conectado')
});
db.on('disconnected', function(err){
    console.log('Desconectado')
});

var Schema = mongoose.Schema;

var _schema = { name: { type: String, default: '' }
  , description: { type: String, default: '' }
  , alcohol: { type: Number, min: 0, default: '' }
  , price: { type: Number, min: 0, default: '' }
  , category: { type: String, default: ''}
  , created_at: { type: Date, default: Date.now }
  }
  , BeerSchema = new Schema(_schema);

module.exports = mongoose.model('Beer', BeerSchema);