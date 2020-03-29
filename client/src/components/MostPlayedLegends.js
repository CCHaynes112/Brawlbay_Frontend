import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import RankedInfo from '../components/RankedInfo';
import LegendStats from '../components/LegendStats';
import LegendCard from '../components/LegendCard';
import DoughnutChart from '../components/charts/DoughnutChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import ChartCard from '../components/ChartCard';

import rankImg from '../components/assets/img/Rankings/Diamond.png';
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