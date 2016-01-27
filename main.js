var express = require('express');
var app = express();

app.use(express.static(__dirname+"/") );

app.get('/', function(req, res, next){
	res.sendFile('./index.html');
});

app.listen(3002);
