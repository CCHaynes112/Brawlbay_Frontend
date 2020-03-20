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

import playerImg from './assets/img/legend_art/44.png';

const useStyles = makeStyles(theme => ({
    root: {
        width: 200,
    },
    media: {
        width: "100%",
        height: 300,
    },
}));

export default function PlayerCard() {
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={playerImg}
                        title="LegendImg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Boomie</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Rating: 2906</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">US-E</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Wins: 485</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        View Stats
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}