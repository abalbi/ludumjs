var express = require('express');
var app = express();

app.use(express.static('public'));
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/ludumjs');

app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

app.get('/elemento/guardar/:id', function(req, res){
	guardar(req, res);
});

app.post('/elemento/guardar/:id', function(req, res){
	guardar(req, res);
});

function guardar (req, res) {
	id = req.params.id;
	elemento = req.body;
	elementos = db.get('elementos');
	elementos.insert(elemento, function(err, doc){
      doc.caca = "caca";
      console.log(JSON.stringify(doc));
      res.end(JSON.stringify(doc));
	});
}

app.get('/elemento.json', function(req, res) {
   res.sendfile('public/item.json');
});


app.get('/elemento', function(req, res) {
   res.sendfile('elemento/editor.html');
});



console.log('Escuchando el puerto 3000');
app.listen(3000);
