import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import RankedTeam from '../components/RankedTeam';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
    paper: {
        padding: 20,
        margin: "auto",
        marginTop: 10,
        marginBottom: 5,
        textAlign: "center",
        width: "97%",
        //backgroundColor: "#fcfcfc",
    },
    rankedTeams: {
        overflowY: "scroll",
        height: 450,
    },
}));

export default function RankedInfo(props) {
    const classes = useStyles();

    let rankedContent;

    if (props.type === "1v1") {
        rankedContent = (
            <div>
                <img src={props.rankedImg} alt="Rank" />
                <Typography variant="body1">Region: {props.region}</Typography>
                <Typography variant="body1">{props.rank}</Typography>
                <Typography variant="body1">Peak Rating: {props.peakRating}</Typography>
                <Typography variant="body1">Current Rating: {props.currentRating}</Typography>
                <Typography variant="body1">Games: {props.games}</Typography>
                <Typography variant="body1">Wins: {props.wins}</Typography>
                <Typography variant="body1">Losses: {props.losses}</Typography>
            </div>
        )
    }
    else {
        rankedContent = (
            <div className={classes.rankedTeams}>
                {
                    props.teams.map((team) =>
                        <Paper elevation="2" className={classes.paper}>
                            <RankedTeam team={team} />
                        </Paper>
                    )
                }
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <Typography variant="h5">{props.type}</Typography>
            {rankedContent}
        </div>
    );
}