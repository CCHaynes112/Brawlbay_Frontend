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


const useStyles = makeStyles(theme => ({
    root: {
        //margin: 1,
    },
    card: {
        width: 200,
    },
    media: {
        width: "100%",
        height: 275,
    },
}));

export default function PlayerCard(props) {
    const classes = useStyles();

    return (
        <Grid item md={3} className={classes.root}>
            <Card elevation={2} className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.legendImg}
                        title="LegendImg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Boomie</Typography>
                        <Typography variant="body2" component="p">Rating: 2906</Typography>
                        <Typography variant="body2" component="p">US-E</Typography>
                        <Typography variant="body2" component="p">Wins: 485</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="/result">
                        View Stats
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}