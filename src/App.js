import React from "react";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import Home from "./screens/Home";
import Navbar from "./components/Navbar";

import Footer from './components/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E8C547",
    },
    secondary: {
      main: "#30323D",
      light: "#D4D4D7",
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
                <Home />
                <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
