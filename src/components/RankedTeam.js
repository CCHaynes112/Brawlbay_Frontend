import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
}));

export default function RankedTeam(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5">{props.members}</Typography>
            <Grid container>
                <Grid item container md={6}>
                    <img src={props.team.rankedImg} />
                </Grid>
                <Grid item container md={6}>
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