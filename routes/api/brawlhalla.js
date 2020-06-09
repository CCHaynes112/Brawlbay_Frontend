var router = require('express').Router();

router.get('/api/topRanked', (req, res) => {
    var playerCount = req.query.playerCount || 50;
    var pageNumber = req.query.pageNumber || 1;
    var type = req.query.type || "1v1";
    axios.get("https://api.brawlhalla.com/rankings/" + type + "/all/" + pageNumber + "?api_key=" + brawlhallaAPIKey)
        .then(axRes => {
            res.send(axRes.data.slice(0, playerCount));
        })
        .catch(error => {
            res.send("Error loading top ranked")
        });
});

router.get('/api/searchPlayer', (req, res) => {
    var playerID = req.query.player;

    if (playerID.match(/[a-zA-Z]/) != null) {
        // There are letters, can't be an id
        getPlayerByName(req, res, playerID);
    }
    else {
        // Input is only numbers
        getPlayerByID(req, res, playerID);
    }
});

router.get('/api/player', (req, res) => {
    var playerID = req.query.player;
    var playerObj;
    axios.get("https://api.brawlhalla.com/player/" + playerID + '/stats?api_key=' + brawlhallaAPIKey)
        .then(axRes => {
            playerObj = axRes.data;
            if (Object.keys(playerObj).length > 0) {
                axios.get("https://api.brawlhalla.com/player/" + playerID + '/ranked?api_key=' + brawlhallaAPIKey)
                    .then(axRes => {
                        playerObj["ranked"] = axRes.data;
                        res.send(playerObj);
                    })
            }
            else {
                throw "Player Not Found";
            }
        })
        .catch(error => {
            res.status(404).end();
            res.send("Error loading player data for player: " + playerID);
        });
});

router.get('/api/players', (req, res) => {
    var playerIDs = req.query.players;

    //Define array promises
    let promises = [];
    playerIDs.forEach(id => {
        promises.push(
            axios.get("https://api.brawlhalla.com/player/" + id + '/stats?api_key=' + brawlhallaAPIKey)
        );
    })

    Promise.all(promises)
        .then(responses => {
            let data = [];
            responses.forEach(response => {
                data.push(response.data);
            })
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/api/clan', (req, res) => {
    var clanID = req.query.clan;
    axios.get("https://api.brawlhalla.com/clan/" + clanID + '/?api_key=' + brawlhallaAPIKey)
        .then(axRes => {
            res.send(axRes.data);
        })
        .catch(error => {
            res.send("Error loading player data for clan: " + clanID);
        });
});

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

module.exports = router;