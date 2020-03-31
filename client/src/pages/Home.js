import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TopEight from '../components/TopEight';
import PlayerSearchBar from '../components/PlayerSearchBar';

import bannerImg from '../components/assets/img/Brawlbay_Banner_Gradient_lighter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
    },
    paper: {
        marginTop: 20,
        marginBottom: 20,
        //backgroundColor: "#fcfcfc",
    },
    banner: {
        width: "100%",
        height: 400,
        textAlign: "center",
        backgroundImage: "url(" + bannerImg + ")",
        backgroundPosition: 'center',
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

            <Paper className={classes.paper}>
                <TopEight />
            </Paper>
        </div>
    );
}