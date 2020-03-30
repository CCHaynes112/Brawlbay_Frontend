import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
    root: {
        //margin: 1,
        textAlign: "left",
    },
    card: {
        width: 200,
        textAlign: "left",
        margin: "auto",
    },
    media: {
        width: "100%",
        height: 275,
    },
    content: {
        paddingBottom: 0,
    },
    grid: {

    }
}));

export default function LegendCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={2} className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.legendImg}
                title="LegendImg"
            />
            <CardContent className={classes.content}>
                <Grid container className={classes.grid}>
                    <Grid item md={9}>
                        <Typography gutterBottom variant="h5" component="h2">Boomie</Typography>
                        <Typography gutterBottom variant="p" component="p">Level: 68</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <IconButton>
                            <ExpandMore />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}