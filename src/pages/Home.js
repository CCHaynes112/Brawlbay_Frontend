import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import TopEight from '../components/TopEight';

import bannerImg from '../components/assets/img/Brawlbay_Banner_Gradient_lighter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
    },
    paper: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#fcfcfc",
    },
    banner: {
        width: "100%",
        height: 400,
        textAlign: "center",
        backgroundImage: "url(" + bannerImg + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    searchBar: {
        marginTop: 300,
        width: "60%",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.banner}>
                    <FormControl className={classes.searchBar}>
                        <InputLabel htmlFor="player-search">
                            Search...
                        </InputLabel>
                        <Input endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </div>
            </Paper>

            <Paper className={classes.paper}>
                <TopEight />
            </Paper>
        </div>
    );
}