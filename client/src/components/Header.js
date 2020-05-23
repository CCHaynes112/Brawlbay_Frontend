import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import SettingsIcon from '@material-ui/icons/Settings';

import logo from './assets/img/Logo-Black.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    flexEnd: {
        display: "flex",
        justifyContent: "flex-end",
    },

    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    logoContainer: {
        textAlign: "center",
    },

    logo: {
        lineHeight: "80px",
        "& img": {
            width: "95%",
            margin: "auto",
            verticalAlign: "middle",
            display: "inline-block",
        }
    },
    drawerList: {
        paddingLeft: theme.spacing(2),
    },

    nested: {
        paddingLeft: theme.spacing(4),
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    iconWhite: {
        color: theme.palette.text.secondary,
    }
}));

function Header(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar, classes.logoContainer}>
                <a href="/" className={classes.logo}><img src={logo} alt="Logo" /></a>
            </div>
            <Divider />
            <List className={classes.drawerList}>
                <ListItem button component="a" href="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="items">
                    <ListItemText primary="Items" />
                </ListItem>
                <ListItem button component="a" href="legends">
                    <ListItemText primary="Legends" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Rankings" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="1v1leaderboard">
                    <ListItemText primary="1v1 Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="2v2leaderboard">
                    <ListItemText primary="2v2 Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="clanleaderboard">
                    <ListItemText primary="Clan Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="ratings">
                    <ListItemText primary="Rating Distribution" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Community" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="streams">
                    <ListItemText primary="Streams" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="tournaments">
                    <ListItemText primary="Tournaments" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="videos">
                    <ListItemText primary="Videos" />
                </ListItem>
                <ListItem button className={classes.nested} component="a" href="gifs">
                    <ListItemText primary="Gifs" />
                </ListItem>
                <ListItem button  component="a" href="contact">
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.flexEnd}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton className={classes.iconWhite}><ToggleOffIcon fontSize="large" /></IconButton>
                    <IconButton className={classes.iconWhite}><SettingsIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    );
}

export default Header;