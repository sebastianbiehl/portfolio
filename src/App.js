import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import Home from "./screens/Home";
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E8C547",
    },
    secondary: {
      main: "#30323D",
    },
  },
  typography: {
    fontFamily: ["Rajdhani", "sans-serif"],
  },
});

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
  },
  body: {
    backgroundColor: '#30323D',
    color: 'white',
    flex: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <Navbar />
        <div color="primary" className={classes.body}>
          <Router>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}
