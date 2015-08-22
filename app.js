var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join(__dirname, 'lib', 'views'));
app.set('view engine', 'jade');

var setupOdysseyRoutes = require('./lib/odyssey/routes');
setupOdysseyRoutes(app);


var server = app.listen(3000, function(){
 console.log('Express server listening on port 3000');
});