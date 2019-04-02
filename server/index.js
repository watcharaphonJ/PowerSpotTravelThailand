var express = require('express')
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pst');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log("[%s] Database connected", new Date());
});

var app = express()
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

var search = require('./src/search');
var tour = require('./src/tour');
var image = require('./src/image');

app.use('/search', search);
app.use('/tour', tour);
app.use('/image', image);

app.use((err, req, res, next) => {
    console.log("[%s] %s", new Date(), err);
    res.json({ results: err });
});

var server = app.listen(8081, function () {
   console.log("[%s] Server listening at %s", new Date(), 8081);
});
