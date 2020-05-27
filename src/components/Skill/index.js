import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    const classes = useStyles();
  return (

        <Box display="flex" alignItems="center">
        <Typography className={classes.text} color="white">{props.label}</Typography>
      <Box width="100%" mr={1}>
        <LinearProgress className={classes.progress} variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography style={{fontSize: 20}} color="white">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
    
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  text: {
        marginRight: 16,
        minWidth: 100,
        fontSize: 22,
  },
  progress: {
      height: 20,
      marginTop: 8,
      marginBottom: 8,
  },
});

export default function LinearWithValueLabel({value, label}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={value} label={label} />
    </div>
  );
}
