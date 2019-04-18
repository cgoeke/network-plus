import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

const styles = theme => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.unit * 2
  },
  counter: {
    color: theme.palette.common.white,
    padding: `0px ${theme.spacing.unit * 2}px`
  }
});

const Controller =({ classes, current, total, handlePrev, handleNext }) => (
  <Grid className={classes.container} container>
    <Button 
      onClick={handlePrev}
      color="secondary" 
      variant="contained"
    >
      <NavigateBefore/>
    </Button>
    <Typography className={classes.counter} variant="h6">
      {`${current} / ${total}`}
    </Typography>
    <Button 
      onClick={handleNext}
      color="secondary" 
      variant="contained"
    >
      <NavigateNext/>
    </Button>
  </Grid>
);

Controller.propTypes = {
  classes: PropTypes.object.isRequired, 
  current: PropTypes.number.isRequired, 
  total: PropTypes.number.isRequired, 
  handlePrev: PropTypes.func.isRequired, 
  handleNext: PropTypes.func.isRequired
};

export default withStyles(styles)(Controller);