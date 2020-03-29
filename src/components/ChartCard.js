import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DoughnutChart from '../components/charts/DoughnutChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';


const useStyles = makeStyles(theme => ({
    root: {
        //margin: 1,
        textAlign: "left",
    },
    tabs: {
        padding: 0,
    },
    tab: {
        padding: 0,
    },
}));

export default function LegendCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={2} className={classes.root}>
            <Tabs className={classes.tabs}>
                <Tab className={classes.tab} label="Win/Loss" />
                <Tab className={classes.tab} label="Damage(Bar)" />
                <Tab className={classes.tab} label="Damage(Pie)" />
            </Tabs>
        </Card>
    );
}