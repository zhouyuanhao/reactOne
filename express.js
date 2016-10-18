var express = require('express');
var express = require('express');
var app = express();


app.use('/dist/*.js', function(req, res) {
	res.sendFile(req.originalUrl, {
		root: __dirname
	});
});

app.use('/', function(req, res) {
	res.sendFile('./index.desk.html', {
		root: __dirname
	});
});

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});