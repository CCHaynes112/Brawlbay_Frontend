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
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import PlayerSearchBar from "./PlayerSearchBar";
import ContentHeader from './ContentHeader';

import logo from './assets/img/Logo-Black.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
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
        minHeight: "100vh",
        //padding: theme.spacing(3),
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
                <Link href="/" className={classes.logo}><img src={logo} alt="Logo" /></Link>
            </div>
            <Divider />
            <List className={classes.drawerList}>
                <ListItem button component={Link} href="/">
                    <ListItemText primary="Home" />
                </ListItem>
                {/* <ListItem button component={Link} href="/items">
                    <ListItemText primary="Items" />
                </ListItem>
                <ListItem button component={Link} href="/legends">
                    <ListItemText primary="Legends" />
                </ListItem> */}
                <ListItem>
                    <ListItemText primary="Rankings" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/1v1leaderboard">
                    <ListItemText primary="1v1 Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/2v2leaderboard">
                    <ListItemText primary="2v2 Leaderboard" />
                </ListItem>
                {/* <ListItem button className={classes.nested} component={Link} href="/clanleaderboard">
                    <ListItemText primary="Clan Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/ratings">
                    <ListItemText primary="Rating Distribution" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Community" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/streams">
                    <ListItemText primary="Streams" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/tournaments">
                    <ListItemText primary="Tournaments" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/videos">
                    <ListItemText primary="Videos" />
                </ListItem>
                <ListItem button className={classes.nested} component={Link} href="/gifs">
                    <ListItemText primary="Gifs" />
                </ListItem> */}
                <ListItem button component={Link} href="/contact">
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
                    <PlayerSearchBar filled />
                    <IconButton className={classes.iconWhite}><ToggleOffIcon fontSize="large" /></IconButton>
                    <IconButton className={classes.iconWhite}><SettingsIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp implementation="css">
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
                <Hidden smDown implementation="css">
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