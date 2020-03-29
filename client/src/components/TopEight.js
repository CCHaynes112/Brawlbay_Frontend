import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PlayerCard from './PlayerCard';

import top8Img from './assets/img/TopEight.jpg'

import legend44Img from './assets/img/legend_art/44.png';
import legend5Img from './assets/img/legend_art/5.png';
import legend3Img from './assets/img/legend_art/3.png';
import legend14Img from './assets/img/legend_art/14.png';

import legend30Img from './assets/img/legend_art/30.png';
import legend36Img from './assets/img/legend_art/36.png';
import legend22Img from './assets/img/legend_art/22.png';
import legend28Img from './assets/img/legend_art/28.png';


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

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <img src={top8Img} className={classes.topPlayers} />
            </Grid>

            <Grid container spacing={2} className={classes.cardContainer}>
                <Grid container item xs={12} spacing={3} className={classes.cardContainer}>
                    <PlayerCard legendImg={legend44Img} />
                    <PlayerCard legendImg={legend5Img} />
                    <PlayerCard legendImg={legend3Img} />
                    <PlayerCard legendImg={legend14Img} />
                </Grid>
                <Grid container item xs={12} spacing={3} className={classes.cardContainer}>
                    <PlayerCard legendImg={legend30Img} />
                    <PlayerCard legendImg={legend36Img} />
                    <PlayerCard legendImg={legend22Img} />
                    <PlayerCard legendImg={legend28Img} />
                </Grid>
            </Grid>
        </div>
    );
}