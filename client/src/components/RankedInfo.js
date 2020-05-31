import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    root: {

    },
    paper: {
        width: "100%",
        height: "15rem",
        overflow: "auto",
    },

    content: {
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
    },
    imgContainer: {
        margin: "auto",
    },
    rankImg: {
        width: "100px",
    },

    rankFields: {
        textAlign: "left",
    },

    rankValues: {
        textAlign: "right",
    },
    container2v2: {
        height: "15rem",
    },
}));


export default function RankedInfo(props) {
    const classes = useStyles();

    let rankedContent;

    // If Ranked 1v1
    if (props.type === "1v1") {
        rankedContent = (
            <Paper className={classes.paper}>
                <Grid container className={classes.content}>
                    <Grid item>
                        <Typography variant="h6">{props.playerName}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">Rank {props.type}</Typography>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container className={classes.content}>
                    <Grid className={classes.imgContainer} item lg={4}>
                        <img src={props.rankedImg} alt="Rank" className={classes.rankImg} />
                    </Grid>
                    <Grid item lg={3} className={classes.rankFields}>
                        <Typography variant="body1">Region</Typography>
                        <Typography variant="body1">Rank</Typography>
                        <Typography variant="body1">Peak Rating</Typography>
                        <Typography variant="body1">Current Rating</Typography>
                        <Typography variant="body1">Games</Typography>
                        <Typography variant="body1">Wins</Typography>
                        <Typography variant="body1">Losses</Typography>
                    </Grid>
                    <Grid item lg={5} className={classes.rankValues}>
                        <Typography variant="body1">{props.region}</Typography>
                        <Typography variant="body1">{props.rank}</Typography>
                        <Typography variant="body1">{props.peakRating}</Typography>
                        <Typography variant="body1">{props.currentRating}</Typography>
                        <Typography variant="body1">{props.games}</Typography>
                        <Typography variant="body1">{props.wins}</Typography>
                        <Typography variant="body1">{props.losses}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
    // If Ranked 2v2
    else {
        rankedContent = (
            <Paper className={classes.container2v2, classes.paper}>
                {props.teams.map((team, key) => (
                    <div key={key}>
                        <Grid container className={classes.content}>
                            <Grid item>
                                <Typography variant="h6">{team.teamname}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Rank {props.type}</Typography>
                            </Grid>
                        </Grid>
                        <Divider light />
                        <Grid container className={classes.content}>
                            <Grid className={classes.imgContainer} item lg={4}>
                                <img src={require(`./assets/img/Rankings/${team.tier.split(" ")[0]}.png`)} alt="Rank" className={classes.rankImg} />
                            </Grid>
                            <Grid item lg={3} className={classes.rankFields}>
                                <Typography variant="body1">Region</Typography>
                                <Typography variant="body1">Rank</Typography>
                                <Typography variant="body1">Peak Rating</Typography>
                                <Typography variant="body1">Current Rating</Typography>
                                <Typography variant="body1">Games</Typography>
                                <Typography variant="body1">Wins</Typography>
                                <Typography variant="body1">Losses</Typography>
                            </Grid>
                            <Grid item lg={5} className={classes.rankValues}>
                                <Typography variant="body1">{team.region}</Typography>
                                <Typography variant="body1">{team.tier}</Typography>
                                <Typography variant="body1">{team.peak_rating}</Typography>
                                <Typography variant="body1">{team.rating}</Typography>
                                <Typography variant="body1">{team.games}</Typography>
                                <Typography variant="body1">{team.wins}</Typography>
                                <Typography variant="body1">{team.games - team.wins}</Typography>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </Paper>
        );
    }

    return (
        <div className={classes.root}>
            {rankedContent}
        </div>
    );
}