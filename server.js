const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiKey = '44be76a34740228b2c54bec0a6cebe57';
const request = require('request');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('static_resources'));

app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.render('index');
});

app.post('/', function (req, res) {
    let city = req.body.city;
    let weatherText = `It's 25 degrees ${city}!`;
    
    res.render('index', { weather: weatherText, error: null, name: city });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});