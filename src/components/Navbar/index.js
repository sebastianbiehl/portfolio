import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 100,
        position: 'sticky',
        top: 0,
        left: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    nav: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    navItem: {
        fontSize: '1.3rem',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
  }));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky" >
                <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <div className={classes.nav}>
                    <Button color="inherit" href="#home" className={classes.navItem}>HOME</Button>
                    <Button color="inherit" href="#about" className={classes.navItem}>ABOUT</Button>
                    <Button color="inherit" href="#portfolio" className={classes.navItem}>PORTFOLIO</Button>
                    <Button color="inherit" href="#contact" className={classes.navItem}>CONTACT</Button>
                </div>
                <IconButton href="https://github.com/sebastianbiehl"><GitHubIcon fontSize="medium" color="secondary" /></IconButton>
                <IconButton href="https://twitter.com/biehlsebastian"><TwitterIcon fontSize="medium" color="secondary" /></IconButton>
                </Toolbar>
                
            </AppBar>
        </div>
    )
}

export default Navbar;