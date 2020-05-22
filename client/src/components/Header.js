// import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

import logo from './assets/img/Logo-Black.png';

// const useStyles = makeStyles(theme => ({
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.primary,
//     },
//     logo: {
//         width: 250,
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(1),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         width: theme.spacing(7),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 7),
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: 120,
//             '&:focus': {
//                 width: 200,
//             },
//         },
//     },
//     desktopView: {
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//             display: 'flex',
//         },
//     },
//     mobileView: {
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//             display: 'none',
//         },
//     },
// }));

// export default function Header() {
//     const classes = useStyles();

//     //The anchor object where the menu will spawn
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleMobileMenuOpen = event => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const renderMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem>
//                 <div className={classes.search}>
//                     <div className={classes.searchIcon}>
//                         <SearchIcon />
//                     </div>
//                     <InputBase
//                         placeholder="Search…"
//                         classes={{
//                             root: classes.inputRoot,
//                             input: classes.inputInput,
//                         }}
//                         inputProps={{ 'aria-label': 'search' }}
//                     />
//                 </div>
//             </MenuItem>
//             <MenuItem>
//                 <Button color="inherit" href="/">Home</Button>
//             </MenuItem>
//             <MenuItem>
//                 <Button color="inherit" target="_blank" href="https://www.brawlhalla.com/rankings/1v1/">Leaderboards</Button>
//             </MenuItem>
//         </Menu>
//     );

//     return (
//         <div>
//             <AppBar position="fixed">
//                 <Toolbar>
//                     <div className={classes.title}>
//                         <a href="/"><img src={logo} alt="Logo" className={classes.logo} /></a>
//                     </div>

//                     <div className={classes.desktopView}>
//                         <Button color="inherit" href="/">Home</Button>
//                         <Button color="inherit" target="_blank" href="https://www.brawlhalla.com/rankings/1v1/">Leaderboards</Button>
//                         <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase
//                                 placeholder="Search…"
//                                 classes={{
//                                     root: classes.inputRoot,
//                                     input: classes.inputInput,
//                                 }}
//                                 inputProps={{ 'aria-label': 'search' }}
//                             />
//                         </div>
//                     </div>

//                     <div className={classes.mobileView}>
//                         <IconButton color="inherit" onClick={handleMobileMenuOpen}>
//                             <MoreIcon />
//                         </IconButton>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             {renderMenu}
//         </div>
//     );
// }

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
}));

function ResponsiveDrawer(props) {
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
                <ListItem button >
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Items" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Legends" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Rankings" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="1v1 Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="2v2 Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Clan Leaderboard" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Rating Distribution" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Community" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Streams" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Tournaments" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Videos" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Gifs" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
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
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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

export default ResponsiveDrawer;