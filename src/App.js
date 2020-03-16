import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import theme from './theme';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}