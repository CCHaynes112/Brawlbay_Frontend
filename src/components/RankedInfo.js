import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import RankedTeam from '../components/RankedTeam';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
}));

export default function RankedInfo(props) {
    const classes = useStyles();

    const rank1v1 = (
        <div>
            <img src={props.rankedImg} />
            <Typography variant="body1">Region: {props.region}</Typography>
            <Typography variant="body1">{props.rank}</Typography>
            <Typography variant="body1">Peak Rating: {props.peakRating}</Typography>
            <Typography variant="body1">Current Rating: {props.currentRating}</Typography>
            <Typography variant="body1">Games: {props.games}</Typography>
            <Typography variant="body1">Wins: {props.wins}</Typography>
            <Typography variant="body1">Losses: {props.losses}</Typography>
        </div>
    )
    
    const rank2v2 = (
        props.teams.map((team) =>
            <Paper>
                <RankedTeam team={team} />
            </Paper>
        )
    )

    let rankedContent;
    if (props.type == "1v1") {
        rankedContent = rank1v1;
    }
    else {
        rankedContent = rank2v2;
    }

    return (
        <div className={classes.root}>
            <Typography variant="h3">Current Season</Typography>
            <Typography variant="h6">{props.type}</Typography>
            {rankedContent}
        </div>
    );
}