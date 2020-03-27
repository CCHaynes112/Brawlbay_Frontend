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
    button: {
        marginTop: 10,
    }
}));

export default function LegendStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3">Legend Stats</Typography>
            <Button className={classes.button} variant="contained" color="secondary">Legends</Button>
        </div>
    );
}