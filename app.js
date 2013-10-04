var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

app.get('lib/angular/angular.js', function(req, res) {
   res.sendfile('lib/angular/angular.js');
});

app.listen(3000);