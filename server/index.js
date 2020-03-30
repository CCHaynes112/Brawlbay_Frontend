const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
var { brawlhallaAPIKey } = require('./secrets')


//For production use:
// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
//app.use(cors(corsOptions));

app.use(cors());

app.get('/api/test', (req, res) => {
    res.send({
        "test": 123
    });
});

app.get('/api/topRanked', (req, res) => {
    axios.get("https://api.brawlhalla.com/rankings/1v1/all/1?api_key=" + brawlhallaAPIKey)
        .then(axRes => {
            res.send(axRes.data.slice(0, 8));
        })
        .catch(error => {
            console.log(error);
            res.send(error)
        });
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});