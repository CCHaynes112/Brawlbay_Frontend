import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import PlayerCard from './PlayerCard';

import top8Img from './assets/img/TopEight.jpg'

import legend44Img from './assets/img/legend_art/44.png';
console.log(legend44Img);


const useStyles = makeStyles(theme => ({
    root: {
        padding: "10%",
        paddingTop: "2rem",
    },
    topPlayers: {
        width: 400,
        marginBottom: 30,
    },
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function TopEight() {
    const classes = useStyles();

    const [playerArray, setPlayerArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(null);

    let playersElement;

    useEffect(() => {
        axios.get("http://localhost:5000/api/topRanked")
            .then(res => {
                setIsLoaded(true);
                setPlayerArray(res.data);
                console.log(res.data);
            })
            .catch(error => {
                setLoadError(error.data);
            })
    }, [isLoaded, isLoaded]);

    if (!isLoaded) {
        playersElement = (<CircularProgress />)
    }

    else if (loadError) {
        playersElement = (<Typography>Error: {loadError}</Typography>)
    }

    else {
        console.log("Loaded!")
        playersElement = playerArray.map((player, key) =>
            <PlayerCard
                key={key}
                legendImg={require(`./assets/img/legend_art/${player.best_legend}.png`)}
                playerName={player.name}
                playerRegion={player.region}
                playerRating={player.rating}
                playerWins={player.wins}
            />
        )
    }

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <img src={top8Img} className={classes.topPlayers} alt="Top8" />
            </Grid>

            <Grid container spacing={2} className={classes.cardContainer}>
                <Grid container item xs={12} spacing={3} className={classes.cardContainer}>
                    {playersElement}
                </Grid>
            </Grid>
        </div>
    );
}