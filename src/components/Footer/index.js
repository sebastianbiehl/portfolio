import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
    
  }));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>Sebastian Biehl ©2020</Typography>
            <IconButton href="https://github.com/sebastianbiehl"><GitHubIcon fontSize="large" color="secondary" /></IconButton>
        </div>
    )
}

export default Footer;