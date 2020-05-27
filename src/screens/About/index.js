import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/playArrow';

import Skill from '../../components/Skill';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: theme.palette.secondary.light,
    },
  }));

const About = () => {
    const classes = useStyles();
  return (
    <div id="about" className={classes.root}>
        <div data-aos="slide-right" data-aos-delay="100" data-aos-duration="1000" className={classes.root}>

        </div>
    </div>
  )
};

export default About;