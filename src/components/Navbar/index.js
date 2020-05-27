import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
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
            <AppBar position="static">
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
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;