import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        height: 65,
        padding: 10,
        marginTop: 50,
    },
    curtis: {
        float: "right",
        color: theme.palette.secondary.main,
    },
    socials: {
        color: theme.palette.secondary.main,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.curtis}>
                <Grid container spacing={1}>
                    <Grid item>
                        <IconButton href="http://CurtisHaynes.net" className={classes.socials}>
                            <Typography>Developed by Curtis Haynes</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="https://www.linkedin.com/in/curtis-haynes-b608b015b/" className={classes.socials}>
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="https://github.com/CCHaynes112" className={classes.socials}>
                            <GitHub />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}