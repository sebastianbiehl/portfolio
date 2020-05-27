import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/playArrow';

import ProfilePicture from '../../img/profile-picture.jpg';
import './style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: [`2px dotted ${theme.palette.primary.main}` ],
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        fontSize: '2rem',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    picture: {
        borderRadius: 500,
        width: 250,
        height: 250,
        marginRight: theme.spacing(5),
    },
    button: {
        marginTop: theme.spacing(3),
        fontSize: '1.2rem',
        width: 410,
    },
  }));

const Intro = () => {
    const classes = useStyles();
  return (
    <Container className={classes.root}>
        <img src={ProfilePicture} alt="Profile Picture" className={classes.picture} />
        <div id="home" className={classes.text}>
            <Typography className={[classes.title, 'typewriter-effect']} >Hi. My name is <span className={classes.name}>Sebastian Biehl</span>.</Typography>
            <div>
            <Typography className={[classes.title, 'typewriter-effect-2']}>I'm a German Web Developer.</Typography>

            </div>
            <Button color="primary" variant="outlined" className={[classes.button, 'appear']}>View my work <ArrowIcon /></Button>
        </div>
    </Container>
  )
};

export default Intro;