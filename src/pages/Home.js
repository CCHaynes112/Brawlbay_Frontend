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

import logo from '../components/assets/img/Brawlbay_Banner_Gradient_lighter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: 20,
        marginBottom: 20,
    },
    bannerImg: {
        width: "100%",
    },
    searchContainer: {
        //marginTop: -100,
        textAlign: "center",
    },
    searchBar: {
        width: "60%",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div>
                    <img className={classes.bannerImg} src={logo} />
                    <div className={classes.searchContainer}>
                        <FormControl className={classes.searchBar}>
                            <InputLabel htmlFor="player-search">
                                Search...
                    </InputLabel>
                            <Input
                                id="player-search"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div>
            </Paper>

            <Paper className={classes.paper}>
                <TopEight />
            </Paper>
        </div>
    );
}