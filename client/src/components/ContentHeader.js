import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {

    },
    imgConainer: {
        height: 255,
        overflow: "hidden",
    },
    headerImg: {
        width: "100%",
    },
    title: {
        position: "relative",
        margin: "auto",
        bottom: 50,
        width: "40%",
        padding: 5,
        textAlign: "center",
    },
}));

export default function Home(props) {
    const classes = useStyles();

    let headerContent;
    if (!props.profile) {
        headerContent = (
            <Paper className={classes.title}>
                <Typography variant="h2">Contact</Typography>
            </Paper>
        );

    }

    return (
        <div className={classes.root}>
            <div className={classes.imgConainer}>
                <img src={props.headerImg} className={classes.headerImg} />
            </div>
            {headerContent}
        </div>
    );
}