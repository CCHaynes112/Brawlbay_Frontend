import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import RankedInfo from '../components/RankedInfo';
import DoughnutChart from '../components/charts/DoughnutChart';
import BarChart from '../components/charts/BarChart';

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
                    <Typography variant="h2">UserName</Typography>
                    <Typography variant="h6">ID: 18764</Typography>
                </Paper>
            </Grid>

            <Grid container className={classes.container}>

                <Grid item container md={6} className={classes.column}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3">Overview</Typography>
                        <Typography variant="h6">Level: 100</Typography>
                        <DoughnutChart width="400" height="400" title="Win/Loss" label1="Wins" label2="Losses" value1="50" value2="25" />
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
                        <Typography variant="h3">Current Season</Typography>
                        <Typography variant="h6">2v2</Typography>
                    </Paper>
                </Grid>
                <Grid item container md={6} className={classes.column}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3">Most Played Legends</Typography>
                        <DoughnutChart width="400" height="400" title="Win/Loss" label1="Wins" label2="Losses" value1="50" value2="25" />

                        <BarChart title="Damage Breakdown" label1="Damage Given" label2="Damage Taken" value1="40" value2="200" />

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}