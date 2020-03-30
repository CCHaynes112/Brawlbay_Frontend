import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import rankImg from '../components/assets/img/Rankings/Diamond.png';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
    body: {
        marginTop: 30,
        justifyContent: "center",
    }
}));

export default function RankedTeam(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">{props.team.members}</Typography>
            <Grid container className={classes.body}>
                <Grid item md={6}>
                    <img src={rankImg} alt="Rank" />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="body1">Region: {props.team.region}</Typography>
                    <Typography variant="body1">{props.team.rank}</Typography>
                    <Typography variant="body1">Peak Rating: {props.team.peakRating}</Typography>
                    <Typography variant="body1">Current Rating: {props.team.currentRating}</Typography>
                    <Typography variant="body1">Games: {props.team.games}</Typography>
                    <Typography variant="body1">Wins: {props.team.wins}</Typography>
                    <Typography variant="body1">Losses: {props.team.losses}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}