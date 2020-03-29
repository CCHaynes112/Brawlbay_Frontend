import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import RankedInfo from '../components/RankedInfo';
import LegendStats from '../components/LegendStats';
import LegendCard from '../components/LegendCard';
import MostPlayedLegends from '../components/MostPlayedLegends';
import DoughnutChart from '../components/charts/DoughnutChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';

import rankImg from '../components/assets/img/Rankings/Diamond.png';
import legend44Img from '../components/assets/img/legend_art/44.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 70,
        padding: 3,
    },
    paper: {
        padding: 20,
        margin: "auto",
        marginTop: 20,
        textAlign: "center",
        width: "97%",
        //backgroundColor: "#fcfcfc",
    },
}));

export default function Result() {
    const classes = useStyles();

    const heading1 = ("h3");
    const heading2 = ("h4");
    const subHeading = ("h5");

    const teamList = [
        {
            members: "chaynes + otherGuy",
            rankedImg: { rankImg },
            region: "US-W",
            rank: "Gold",
            peakRating: "1000",
            currentRating: "999",
            games: "5",
            wins: "3",
            losses: "2",
        },
        {
            members: "Guy1 + Dude2",
            rankedImg: { rankImg },
            region: "US-E",
            rank: "Platinum",
            peakRating: "1945",
            currentRating: "1901",
            games: "354",
            wins: "111",
            losses: "213",
        },
    ];

    return (
        <div className={classes.root}>
            <Grid container item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant={heading1}>UserName</Typography>
                    <Typography variant={subHeading}>ID: 18764</Typography>
                </Paper>
            </Grid>

            <Grid container>

                <Grid item sm={6}>
                    <Paper className={classes.paper}>
                        <Typography variant={heading2}>Overview</Typography>
                        <Typography variant={subHeading}>Level: 100</Typography>
                        <DoughnutChart
                            title="Win/Loss"
                            labels={[
                                "Wins",
                                "Losses",
                            ]}
                            values={[
                                33,
                                59
                            ]}
                        />
                    </Paper>

                    <Paper className={classes.paper}>
                        <Typography variant={heading2}>Most Played Legends</Typography>
                        <MostPlayedLegends />
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant={heading2}>Legend Stats</Typography>
                        <LegendStats />
                    </Paper>
                </Grid>
                <Grid item sm={6}>
                    <Paper className={classes.paper}>
                        <Typography variant={heading2}>Current Season</Typography>
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
                        <Typography variant={heading2}>Current Season</Typography>
                        <RankedInfo
                            type="2v2"
                            teams={teamList}
                        />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}