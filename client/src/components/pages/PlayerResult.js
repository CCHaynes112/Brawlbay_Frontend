import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import RankedInfo from '../RankedInfo';
import ContentHeader from '../ContentHeader';
import DoughnutChart from '../charts/DoughnutChart';
import PlayerOverviewCard from '../PlayerOverviewCard';

import rankImgDiamond from '../assets/img/Rankings/Diamond.png';
import rankImgPlat from '../assets/img/Rankings/Platinum.png';
import rankImgGold from '../assets/img/Rankings/Gold.png';
import overviewLegendImg from '../assets/img/legend_art/31.png';
import headerImg from '../assets/img/maps/9 - nAndoWL.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 60,
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
                <Grid container>
                    <Grid item xs="2" container>
                        <PlayerOverviewCard
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
                    <Grid item xs="10" container>
                        <Grid item xs="12">
                            <Paper className={classes.paper}>
                                <Typography variant="h2">UserName</Typography>
                                <Typography variant="subtitle1">ID: {props.match.params.id}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs="6">
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
                        <Grid item xs="6">
                            <RankedInfo type="2v2" teams={teamList} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}