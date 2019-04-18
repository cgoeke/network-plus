import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = () => ({
  main: {
    alignContent: "center",
    flex: "1 1 0",
    justifyContent: "center"
  }
});

const MainContent = ({ classes, children }) => (
  <Grid className={classes.main} component="main" container item>
    { children }
  </Grid>
);

MainContent.propTypes = {
  classes: PropTypes.object.isRequired, 
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(MainContent);