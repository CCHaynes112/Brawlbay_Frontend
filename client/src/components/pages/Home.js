import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TopEight from '../TopPlayers';
import PlayerSearchBar from '../PlayerSearchBar';

import bannerImg from '../assets/img/Brawlbay_Banner_Gradient_lighter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 70,
    },
    paper: {
        marginTop: 20,
        marginBottom: 20,
    },
    banner: {
        width: "100%",
        height: 600,
        textAlign: "center",
        backgroundImage: "url(" + bannerImg + ")",
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.banner}>
                    <PlayerSearchBar />
                </div>
            </Paper>

            <TopEight />
        </div>
    );
}