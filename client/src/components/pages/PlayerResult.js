import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import RankedCard1v1 from '../RankedCard1v1';
import RankedCard2v2 from '../RankedCard2v2';
import ContentHeader from '../ContentHeader';
import PieChart from '../charts/PieChart';
import PlayerOverviewCard from '../PlayerOverviewCard';
import ClanCard from '../ClanCard';

import headerImg from '../assets/img/maps/Ship.png';
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
                setIsLoaded(true);
            })
            .catch(error => {
                console.log(error.data);
            })
    }, []);

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
                            <ClanCard clanID={playerObj.clan.clan_id} clanName={playerObj.clan.clan_name} className={classes.clanCard} />
                        </Grid>) : null}
                    </Grid>
                    <Grid item lg={10} container>
                        <Grid item sm={6} className={classes.rankedContainer}>
                            <RankedCard1v1
                                type="1v1"
                                playerName={playerObj.ranked.name}
                                rankedImg={require(`../assets/img/Rankings/${playerObj.ranked.tier.split(" ")[0]}.png`)}
                                region={playerObj.ranked.region}
                                rank={playerObj.ranked.tier}
                                peakRating={playerObj.ranked.peak_rating}
                                currentRating={playerObj.ranked.rating}
                                games={playerObj.ranked.games}
                                wins={playerObj.ranked.wins}
                                losses={playerObj.ranked.games - playerObj.ranked.wins}
                            />
                        </Grid>
                        <Grid item sm={6} className={classes.rankedContainer}>
                            <RankedCard2v2 teams={playerObj.ranked["2v2"]} />

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