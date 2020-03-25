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

import RankedInfo from '../components/RankedInfo';
import PieChart from '../components/charts/PieChart';

import rankImg from '../components/assets/img/Rankings/Diamond.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
        padding: 3,
    },
    titlePaper: {
        width: 600,
        padding: 20,
        textAlign: "center",
        marginBottom: 30,
        margin: "auto",
    },
    container: {

    },
    column: {

    },
    paper: {
        padding: 20,
        margin: "auto",
        marginTop: 10,
        textAlign: "center",
        width: "97%",
        backgroundColor: "#fcfcfc",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container item md={12}>
                <Paper className={classes.titlePaper}>
                    <Typography variant="h3">UserName</Typography>
                    <Typography variant="h6">ID: 18764</Typography>
                </Paper>
            </Grid>

            <Grid container className={classes.container}>

                <Grid item container md={6} className={classes.column}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Overview</Typography>
                        <Typography variant="h6">Level: 100</Typography>
                        <PieChart width="400" height="400" />
                    </Paper>

                    <Paper className={classes.paper}>
                        <RankedInfo
                            type="1v1"
                            rankedImg={rankImg}
                            region="US-E"
                            rank="Diamond"
                            peakRating="2049"
                            currentRating="2031"
                            games="904"
                            wins="300"
                            losses="788"
                        />
                    </Paper>

                    <Paper className={classes.paper}>
                        <Typography variant="h4">Current Season</Typography>
                        <Typography variant="h6">2v2</Typography>
                    </Paper>
                </Grid>
                <Grid item container md={6} className={classes.column}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Most Played Legends</Typography>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}