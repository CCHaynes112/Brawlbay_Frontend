import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00796b',
        },
        secondary: {
            main: '#c62828',
        },
        error: {
            main: red.A400,
        },
        // background: {
        //     default: '#ffffff',
        //     paper: '#99DDFF',
        // },
        text: {
            primary: "#000000",
            secondary: "#000000"
        },
    },
});

export default theme;