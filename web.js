/*var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
	if (err) {
	    throw err; 
	}       
	http.createServer(function(request, response) {  
		response.writeHeader(200, {"Content-Type": "text/html"});  
		response.write(html);  
		response.end();  
	    }).listen(8000);
    });

*/
var express = require('express');
var app = express();
var site = require('./site');

// Config

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// General

app.get('/', site.index);
app.listen(5000);
