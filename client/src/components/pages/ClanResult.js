import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import ContentHeader from '../ContentHeader';
import PieChart from '../charts/PieChart';
import ClanOverviewCard from '../ClanOverviewCard';
import PlayerCard from '../PlayerCard';

import headerImg from '../assets/img/maps/ShipPirate.jpg';

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

export default function ClanResult(props) {
    const classes = useStyles();
    const [clanObj, setClanObj] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [top4Players, setTop4Players] = useState([]);

    let page = (<p>Loading...</p>)

    function getTop4PlayerIDs(arr) {
        let ids = [];
        if (arr.clan.length > 4) {
            arr.clan.slice(0, 4).forEach(player => {
                ids.push(player.brawlhalla_id);
            })
        }
        else {
            arr.clan.forEach(player => {
                ids.push(player.brawlhalla_id);
            })
        }
        return ids;
    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/clan", {
            params: {
                clan: props.match.params.id
            }
        })
            .then(res => {
                let ids = getTop4PlayerIDs(res.data);
                setClanObj(res.data);
                axios.get("http://localhost:5000/api/players", {
                    params: {
                        players: ids
                    }
                })
                    .then(res => {
                        console.log("Got players!");
                        console.log(res.data);
                        setTop4Players(res.data);
                        setIsLoaded(true);
                    })
                    .catch(error => {
                        console.log("Error");
                        console.log(error.data);
                    })
            })
            .catch(error => {
                console.log("Error");
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
                            <ClanOverviewCard
                                clanName={clanObj.clan_name}
                                formed={clanObj.clan_create_date}
                                xp={clanObj.clan_xp}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={10} container>
                        {
                            top4Players.map((player, key) =>
                                <PlayerCard
                                    key={key}
                                    playerID={player.brawlhalla_id}
                                    legendImg={require(`../assets/img/legend_art/${player.legends[0].legend_id}.png`)}
                                    playerName={player.name}
                                    playerRating={player.rating}
                                    playerWins={player.wins}
                                />
                            )
                        }

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