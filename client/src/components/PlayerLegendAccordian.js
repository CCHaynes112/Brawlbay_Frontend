import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {

    },
}));

export default function PlayerLegendAccordian() {
    const classes = useStyles();

    let legendArray = [
        {
            id: 3,
            name: "bodvar",
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
        }
    ]

    return (
        <div className={classes.root}>
            {
                legendArray.map((legend, key) =>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Grid container>
                                <Grid item xs="3">
                                    <Typography className={classes.heading}>{legend.name}</Typography>
                                </Grid>
                                <Grid item xs="3">
                                    <Typography className={classes.heading}>{legend.name}</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>Legend Data and stuff</Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            }

        </div>
    );
}