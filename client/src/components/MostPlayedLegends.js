import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LegendCard from '../components/LegendCard';
import ChartCard from '../components/ChartCard';

import legend44Img from '../components/assets/img/legend_art/44.png';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
    button: {
        marginTop: 10,
    },
    mostPlayedRow: {
        marginTop: 20,
    },
    mostPlayedCol: {
        margin: "auto",
    },
}));

export default function MostPlayedLegends(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container md={12} className={classes.mostPlayedRow}>
                <Grid item md={6} className={classes.mostPlayedCol}>
                    <LegendCard legendImg={legend44Img} />
                    <ChartCard />
                </Grid>

                <Grid item md={6} className={classes.mostPlayedCol}>
                    <LegendCard legendImg={legend44Img} />
                    <ChartCard />
                </Grid>
            </Grid>
        </div>
    );
}