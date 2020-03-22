import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';

import TopEight from '../components/TopEight';

import bannerImg from '../components/assets/img/Brawlbay_Banner_Gradient_lighter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
    },
    paper: {
        width: 400,
        padding: 20,
        textAlign: "center",
        marginBottom: 30,
        margin: "auto",
    },
    container: {
        
    },
    leftColumn: {
        margin: "auto",
        backgroundColor: "orange",
    },
    rightColumn: {
        margin: "auto",
        backgroundColor: "green",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid>
                <Paper className={classes.paper}>
                    <Typography variant="h4">UserName</Typography>
                    <Typography variant="p">ID: 18764</Typography>
                </Paper>
            </Grid>
            <Grid container spacing={1} className={classes.container}>
                <Grid item container xs={6} spacing={3} className={classes.leftColumn}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">UserName</Typography>
                        <Typography variant="p">ID: 18764</Typography>
                    </Paper>
                </Grid>
                <Grid item container xs={6} spacing={3} className={classes.rightColumn}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">UserName</Typography>
                        <Typography variant="p">ID: 18764</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}