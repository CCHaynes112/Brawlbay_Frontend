import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import BarChart from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart';
import PieChart from './charts/PieChart';

import overviewLegendImg from './assets/img/legend_art/31.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    subContainer: {
        alignItems: "center",
    },
    heading: {
        display: "flex",
        alignItems: "center",
    },
    headingTitle: {
        marginLeft: 15,
    },
}));

export default function PlayerLegendAccordian() {
    const classes = useStyles();

    let legendArray = [
        {
            id: 3,
            name: "Bodvar",
            level: 29,
            winRate: 57,
            rank: "Diamond"
        },
        {
            id: 4,
            name: "Ragnir",
            level: 15,
            winRate: 35,
            rank: "Platinum"
        },
        {
            id: 4,
            name: "Ragnir",
            level: 15,
            winRate: 35,
            rank: "Platinum"
        },
    ]

    return (
        <div className={classes.root}>
            {
                legendArray.map((legend, key) =>
                    <ExpansionPanel key={key}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container className={classes.subContainer}>
                                <Grid item xs={3} className={classes.heading}>
                                    <Avatar src={overviewLegendImg} />
                                    <Typography variant="h5" className={classes.headingTitle}>{legend.name}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body1">{"Level: " + legend.level}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body1">{"Win Rate: " + legend.winRate + "%"}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body1">{legend.rank}</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container className={classes.chartContainer}>
                                <Grid item>
                                    <Typography variant="body1">Play Time: 47h</Typography>
                                    <Typography variant="body1">Total Games: 1210</Typography>
                                    <Typography variant="body1">Games Win: 800</Typography>
                                    <Typography variant="body1">Games Lost: 410</Typography>
                                    <Typography variant="body1">Kills: 4901</Typography>
                                    <Typography variant="body1">Deaths: 3091</Typography>
                                    <Typography variant="body1">Match Time: 403s</Typography>
                                    <Button className={classes.button} variant="contained" color="secondary">Submit</Button>
                                </Grid>
                                <Grid item>
                                    <DoughnutChart
                                        title="Win/Loss"
                                        labels={["Wins", "Losses"]}
                                        values={[167, 44]}
                                    />
                                </Grid>
                                <Grid item>
                                    <BarChart
                                        title="Damage Breakdown"
                                        labels={["Damage Given", "Damage Taken"]}
                                        values={[899643, 124563]}
                                    />
                                </Grid>
                                <Grid item>
                                    <PieChart
                                        title="Damage Breakdown"
                                        labels={["Primary", "Sword", "Spear", "Unarmed", "Thrown", "Gadget"]}
                                        values={[190, 200, 40, 13, 5]}
                                    />
                                </Grid>
                                <Grid item>
                                    <PieChart
                                        title="K/D/S"
                                        labels={["Kills", "Deaths", "Suicides"]}
                                        values={[935, 543, 59]}
                                    />
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            }

        </div>
    );
}