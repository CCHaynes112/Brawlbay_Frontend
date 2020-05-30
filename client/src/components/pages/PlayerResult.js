import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import RankedInfo from '../RankedInfo';
import ContentHeader from '../ContentHeader';
import PieChart from '../charts/PieChart';
import PlayerOverviewCard from '../ProfileOverviewCard';
import ClanCard from '../ClanCard';

import rankImgDiamond from '../assets/img/Rankings/Diamond.png';
import rankImgPlat from '../assets/img/Rankings/Platinum.png';
import rankImgGold from '../assets/img/Rankings/Gold.png';
import overviewLegendImg from '../assets/img/legend_art/31.png';
import headerImg from '../assets/img/maps/9 - nAndoWL.png';
import PlayerLegendAccordian from '../PlayerLegendAccordian';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 60,
    },
    mainContainer: {
        alignItems: "flex-start",
    },
    overviewContainer: {
        marginTop: -200,
    },
    overviewItems: {
        padding: 10,
        margin: "auto",
    },
    rankedContainer: {
        margin: "auto",
        marginTop: 0,
        padding: 10,
    },
    winRateChart: {
        padding: 10,
        width: 260,
        height: "fit-content",
        margin: "auto",
        paddingBottom: 20,
    },
    clanCard: {
        width: 260,
        height: "fit-content",
        margin: "auto",
        paddingBottom: 20,
    },
}));

export default function PlayerResult(props) {
    const classes = useStyles();

    const teamList = [
        {
            members: "GuyNum1 + otherGuy",
            rankedImg: rankImgGold,
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
            rankedImg: rankImgPlat,
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
            <ContentHeader profile headerImg={headerImg} />
            <Container maxWidth="xl">
                <Grid container className={classes.mainContainer}>
                    <Grid item lg={2} container className={classes.overviewContainer}>
                        <Grid item lg={12} className={classes.overviewItems}>
                            <PlayerOverviewCard
                                playerName="Crass"
                                id="194542"
                                legendImg={overviewLegendImg}
                                level="100"
                                xp="4719307"
                                rating="2906"
                                region="US-E"
                                games="3041"
                                wins="485"
                                losses="1209"
                            />
                        </Grid>
                        <Grid item lg={12} className={classes.overviewItems}>
                            <Paper className={classes.winRateChart}>
                                <Typography variant="h6">Total Win/Loss</Typography>
                                <Divider />
                                <PieChart
                                    labels={["Wins", "Losses"]}
                                    values={[100, 45]}
                                />
                            </Paper>
                        </Grid>
                        <Grid item lg={12} className={classes.overviewItems}>
                            <ClanCard clanName="Blue Mammoth Games" formedDate="09/14/2013" className={classes.clanCard} />
                        </Grid>
                    </Grid>
                    <Grid item lg={10} container>
                        <Grid item sm={6} className={classes.rankedContainer}>
                            <RankedInfo
                                playerName="Boomie"
                                type="1v1"
                                rankedImg={rankImgDiamond}
                                region="US-E"
                                rank="Diamond"
                                peakRating="2049"
                                currentRating="2031"
                                games="904"
                                wins="300"
                                losses="788"
                            />
                        </Grid>
                        <Grid item sm={6} className={classes.rankedContainer}>
                            <RankedInfo type="2v2" teams={teamList} />
                        </Grid>
                        <Grid item sm={12} className={classes.rankedContainer}>
                            <PlayerLegendAccordian />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}