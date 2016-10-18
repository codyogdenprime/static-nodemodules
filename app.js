var path = require('path');
var express = require('express');
var app = express();

app.use('/inc', express.static( path.resolve('./node_modules/angular') ) );

app.listen(3000);

app.get('*', (req,res)=> {
	res.sendFile(__dirname + '/index.html');
})