import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import RankedCard1v1 from './RankedCard1v1';


const useStyles = makeStyles(theme => ({
    root: {

    },
    paper: {
        width: "100%",
        height: "15rem",
        overflow: "auto",
    },
    no2v2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "15rem",
        overflow: "auto",
    },
}));


export default function RankedCard2v2(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                props.teams.length ?
                    <Paper className={classes.paper}>
                        {
                            props.teams.map((team, key) => (
                                <RankedCard1v1
                                    key={key}
                                    type="2v2"
                                    playerName={team.teamname}
                                    rankedImg={require(`./assets/img/Rankings/${team.tier.split(" ")[0]}.png`)}
                                    region={team.region}
                                    rank={team.tier}
                                    peakRating={team.peak_rating}
                                    currentRating={team.rating}
                                    games={team.games}
                                    wins={team.wins}
                                    losses={team.games - team.wins}
                                />
                            ))
                        }
                    </Paper>
                    : (<Paper className={classes.no2v2}>
                        <Typography variant="h6">Oops, no 2v2 data...</Typography>
                    </Paper>)
            }
        </div>
    );
}


