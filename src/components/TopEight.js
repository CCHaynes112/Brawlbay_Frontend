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

import PlayerCard from './PlayerCard';


const useStyles = makeStyles(theme => ({
    root: {
        padding: 100,
    },
    paper: {
        width: "40%",
        padding: 20,
        textAlign: "center",
        margin: "auto",
    }
}));

export default function TopEight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Paper className={classes.paper}>
                    <Typography variant="h3">Top 8 Players</Typography>
                </Paper>
            </div>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={3}>
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                    <PlayerCard />
                </Grid>
            </Grid>
        </div>
    );
}