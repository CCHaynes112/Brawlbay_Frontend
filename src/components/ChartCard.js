import React from 'react';
import PropTypes from 'prop-types';
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
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

import DoughnutChart from '../components/charts/DoughnutChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "left",
        width: "90%;",
        marginTop: 20,
        margin: "auto",
    },
    card: {

    },
    tabs: {

    },
    tab: {
        minWidth: 50,
        width: "33%"
    },
    tabPanel: {
        textAlign: "center",
        paddingBottom: 20,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Typography>
    );
}

export default function LegendCard(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card elevation={2} className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab wrapped className={classes.tab} label="Wins" />
                    <Tab wrapped className={classes.tab} label="Damage" />
                    <Tab wrapped className={classes.tab} label="Damage Type" />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <DoughnutChart
                    title="Win/Loss"
                    labels={[
                        "Wins",
                        "Losses",
                    ]}
                    values={[
                        93,
                        11
                    ]}
                />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <BarChart
                    title="Damage Breakdown"
                    labels={[
                        "Damage Given",
                        "Damage Taken"
                    ]}
                    values={[
                        [0, 40],
                        [0, 200]
                    ]}
                />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <PieChart
                    title="Damage Breakdown"
                    labels={[
                        "Axe",
                        "Katar",
                        "Gadget",
                        "Unarmed",
                        "Thrown",
                    ]}
                    values={[
                        170,
                        200,
                        13,
                        99,
                        5
                    ]}
                />
            </TabPanel>
        </Card>
    );
}


