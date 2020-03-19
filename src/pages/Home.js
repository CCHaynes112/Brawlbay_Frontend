import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';


import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import logo from '../components/assets/img/Brawlbay_Banner_Gradient_lighter.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    banner: {
        padding: 0,
        margin: 0,
    },
    bannerImg: {
        width: "100%",
        margin: "0",
        padding: "0",
    },
    searchBar: {
        width: "60em",
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.banner}>
                <img className={classes.bannerImg} src={logo} />
            </div>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Search...</InputLabel>
                <Input
                    className={classes.searchBar}
                    id="standard-adornment-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Paper>
    );
}