import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    alignItems: "center",
    zIndex: theme.zIndex.modal + 1
  },
  toolbar: {
    justifyContent: 'space-between',
    maxWidth: theme.breakpoints.values.lg,
    width: "100%"
  },
  plus: {
    color: theme.palette.secondary.main
  }
});

const Navbar = ({ classes, children }) => (
  <AppBar className={classes.appBar} position="static">
    <Toolbar className={classes.toolbar}>
      <Typography color="inherit" variant="h6">
        Network<span className={classes.plus}>+</span>
      </Typography> 
      { children }
    </Toolbar>
  </AppBar>
 );

 Navbar.propTypes = {
  classes: PropTypes.object.isRequired, 
  children: PropTypes.node.isRequired
 };

 export default withStyles(styles)(Navbar);