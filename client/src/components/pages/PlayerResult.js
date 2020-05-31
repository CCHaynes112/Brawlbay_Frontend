import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

import rankImgPlat from '../assets/img/Rankings/Platinum.png';
import rankImgGold from '../assets/img/Rankings/Gold.png';
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
    const [playerObj, setPlayerObj] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    let page = (<p>Loading...</p>)

    useEffect(() => {
        axios.get("http://localhost:5000/api/player", {
            params: {
                player: props.match.params.id
            }
        })
            .then(res => {
                setPlayerObj(res.data);
                console.log(res.data)
                setIsLoaded(true);
                console.log(`../assets/img/rankings/${res.data.ranked.tier.split(" ")[0]}.png`);
            })
            .catch(error => {
                console.log(error.data);
            })
    }, []);

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

    if (isLoaded) {
        page = (<div className={classes.root}>
            <ContentHeader profile headerImg={headerImg} />
            <Container maxWidth="xl">
                <Grid container className={classes.mainContainer}>
                    <Grid item lg={2} container className={classes.overviewContainer}>
                        <Grid item lg={12} className={classes.overviewItems}>
                            <PlayerOverviewCard
                                playerName={playerObj.name}
                                id={playerObj.brawlhalla_id}
                                legendImg={require(`../assets/img/legend_art/${playerObj.legends[0].legend_id}.png`)}
                                level={playerObj.level}
                                xp={playerObj.xp}
                                rating={playerObj.ranked.rating}
                                region={playerObj.ranked.region}
                                games={playerObj.games}
                                wins={playerObj.wins}
                                losses={playerObj.games - playerObj.wins}
                            />
                        </Grid>
                        <Grid item lg={12} className={classes.overviewItems}>
                            <Paper className={classes.winRateChart}>
                                <Typography variant="h6">Total Win/Loss</Typography>
                                <Divider />
                                <PieChart
                                    labels={["Wins", "Losses"]}
                                    values={[playerObj.wins, playerObj.games - playerObj.wins]}
                                />
                            </Paper>
                        </Grid>
                        {playerObj.clan ? (<Grid item lg={12} className={classes.overviewItems}>
                            <ClanCard clanName={playerObj.clan.clan_name} className={classes.clanCard} />
                        </Grid>) : null}
                    </Grid>
                    <Grid item lg={10} container>
                        <Grid item sm={6} className={classes.rankedContainer}>
                            <RankedInfo
                                playerName={playerObj.ranked.name}
                                type="1v1"
                                rankedImg={require(`../assets/img/Rankings/${playerObj.ranked.tier.split(" ")[0]}.png`)}
                                region={playerObj.region}
                                rank={playerObj.ranked.tier}
                                peakRating={playerObj.ranked.peak_rating}
                                currentRating={playerObj.ranked.rating}
                                games={playerObj.ranked.games}
                                wins={playerObj.ranked.wins}
                                losses={playerObj.ranked.games - playerObj.ranked.wins}
                            />
                        </Grid>
                        <Grid item sm={6} className={classes.rankedContainer}>
                            {playerObj.ranked["2v2"].length ? (<RankedInfo type="2v2" teams={playerObj.ranked["2v2"]} />) : (<p>No 2v2 ranked data</p>)}
                            
                        </Grid>
                        <Grid item sm={12} className={classes.rankedContainer}>
                            <PlayerLegendAccordian legends={playerObj.legends} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>)
    }

    return (
        <div>
            {page}
        </div>
    );
}