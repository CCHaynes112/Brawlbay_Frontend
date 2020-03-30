const express = require('express');
const app = express();

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.get('/api/test', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});