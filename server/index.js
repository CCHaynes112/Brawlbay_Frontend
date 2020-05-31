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
            res.send(axRes.data.slice(0, 6));
        })
        .catch(error => {
            res.send("Error loading top ranked")
        });
});

app.get('/api/searchPlayer', (req, res) => {
    getUsers(req, res);
});

app.get('/api/player', (req, res) => {
    var playerID = req.query.player;
    var playerObj;
    axios.get("https://api.brawlhalla.com/player/" + playerID + '/stats?api_key=' + brawlhallaAPIKey)
        .then(axRes => {
            playerObj = axRes.data;
            axios.get("https://api.brawlhalla.com/player/" + playerID + '/ranked?api_key=' + brawlhallaAPIKey)
                .then(axRes => {
                    playerObj["ranked"] = axRes.data;
                    res.send(playerObj);
                })
        })
        .catch(error => {
            res.send("Error loading player data for player: " + playerID);
        });
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});


function getUsers(req, res) {
    var playerID = req.query.player;

    if (playerID.match(/[a-zA-Z]/) != null) {
        // There are letters, can't be an id
        getPlayerByName(req, res, playerID);
    }
    else {
        // Input is only numbers
        getPlayerByID(req, res, playerID);
    }
}

function getPlayerByName(req, res, playerID) {
    axios.get("https://api.brawlhalla.com/rankings/1v1/all/1?api_key=" + brawlhallaAPIKey + "&name=" + playerID)
        .then(axRes => {
            res.send(axRes.data);
        })
        .catch(error => {
            res.send("Error loading player data for player: " + playerID);
        });
}

function getPlayerByID(req, res, playerID) {
    // Try to find user by Brawlhalla ID
    axios.get("https://api.brawlhalla.com/player/" + playerID + '/stats?api_key=' + brawlhallaAPIKey)
        .then(axRes => {
            res.send(axRes.data);
        })
        .catch(error => {
            // Couldn't find user, Try to find user by Steam ID
            axios.get("https://api.brawlhalla.com/search?steamid=" + playerID + '&api_key=' + brawlhallaAPIKey)
                .then(axRes => {
                    res.send(axRes.data);
                })
                res.send("Error loading player data for player: " + playerID);
        });
}