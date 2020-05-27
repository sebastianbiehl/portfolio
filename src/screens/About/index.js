import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
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
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: [`2px dotted ${theme.palette.primary.main}` ],
    },
  }));

const About = () => {
    const classes = useStyles();
  return (
          <Container id="about" className={classes.root} data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"> 
                <Skill />
            </Container>
    
  )
};

export default About;