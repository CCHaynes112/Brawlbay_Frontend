import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from '../theme';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import PlayerResult from './pages/PlayerResult';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header>
        <Container maxWidth="xl" style={{minHeight: "100vh"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/players/:id" component={PlayerResult} />
            <Route path="/clans/:id" />
            <Route path="/items" />
            <Route path="/legends" />
            <Route path="/legends/:id" />
            <Route path="/1v1leaderboard" />
            <Route path="/2v2leaderboard" />
            <Route path="/clanleaderboard" />
            <Route path="/ratings" />
            <Route path="/streams" />
            <Route path="/tournaments" />
            <Route path="/videos" />
            <Route path="/gifs" />
            <Route path="/contact" />
          </Switch>
        </Container>
        </Header>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}