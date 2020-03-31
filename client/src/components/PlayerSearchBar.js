import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    searchBar: {
        marginTop: 300,
        width: "60%",
    },
    modal: {

    },
    progressBar: {
        padding: 20,
        textAlign: "center"
    }
}));


function PlayersModal(props) {
    const classes = useStyles();
    const { playerToSearch, onClose, open } = props;

    const handleEnter = () => {
        getPlayers();
    }

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    const [playersArray, setPlayersArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(null);

    function getPlayers() {
        fetch("http://localhost:5000/api/searchPlayer/?playerName=" + playerToSearch)
            .then(res => res.json())
            .then(
                (result) => {
                    //setIsLoaded(true);
                    //setPlayersArray(result);
                    console.log("PlayerSearch:");
                    console.log(result);
                },
                (error) => {
                    setLoadError(error);
                }
            )
    }

    let playersListElement;
    if (!isLoaded) {
        playersListElement = (<div className={classes.progressBar}><CircularProgress /></div>)
    }

    else if (loadError) {
        playersListElement = (<Typography>Error: {loadError}</Typography>)
    }

    else {
        console.log("Loaded player list!")
        playersListElement = (
            <List>
                {playersArray.map(player => (
                    <ListItem button onClick={() => handleListItemClick(player)} key={player}>
                        <ListItemText primary={player} />
                    </ListItem>
                ))}
            </List>
        )
    }

    return (
        <Dialog onEnter={handleEnter} onClose={handleClose} open={open} fullWidth={true} maxWidth="sm" className={classes.modal}>
            <DialogTitle>Players matching '{playerToSearch}'</DialogTitle>
            {playersListElement}
        </Dialog>
    );
}

export default function PlayerSearchBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [playerName, setPlayerName] = React.useState("");

    const handleTextChange = (event) => {
        setPlayerName(event.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
    };

    return (
        <FormControl className={classes.searchBar}>
            <InputLabel>Search...</InputLabel>
            <Input value={playerName} onChange={handleTextChange} endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleClickOpen}>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }
            />
            <PlayersModal playerToSearch={playerName} open={open} onClose={handleClose} />
        </FormControl>
    );
}