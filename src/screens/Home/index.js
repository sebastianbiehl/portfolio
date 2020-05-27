import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/playArrow';

import Intro from '../Intro';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    
  }));

const Home = () => {
    const classes = useStyles();
  return (
    <div data-aos="fade-in">
        <Intro />
    <About />
    <Portfolio />
    <Contact />
    </div>
  )
};

export default Home;