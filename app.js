var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/api', function (req, res) {
	res.send('api');
});


app.get('*', function (req, res) {
	res.redirect('/index.html');
});


app.listen(7000, function () {
	console.log('baihaobio_admin server running at 7000 ports');
});