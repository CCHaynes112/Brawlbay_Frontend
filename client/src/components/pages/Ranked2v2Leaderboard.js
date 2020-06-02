import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ContentHeader from '../ContentHeader';
import LeaderboardTable from '../LeaderboardTable2v2';

import headerImg from '../assets/img/maps/Stadium.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 60,
    },
    container: {
        marginBottom: 30,
    }
}));

export default function Ranked2v2Leaderboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ContentHeader title="Ranked 2v2 Leaderboards" headerImg={headerImg} />
            <Container className={classes.container} maxWidth="xl">
                <LeaderboardTable  />
            </Container>
        </div >
    );
}