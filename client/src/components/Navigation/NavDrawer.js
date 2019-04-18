import React from 'react';
import PropTypes from 'prop-types'; 
import { Drawer, withStyles } from '@material-ui/core';

const styles = theme => ({
  paper: {
    paddingBottom: theme.spacing.unit * 4,
    width: '240px'
  },
  appBarClear: theme.mixins.toolbar
});

const NavDrawer = ({ classes, children, isOpen, handleToggle }) => (
  <Drawer
    open={isOpen} 
    onClose={handleToggle} 
    anchor="right"
    classes={{
      paper: classes.paper
    }}
  >    
    <div className={classes.appBarClear}/>
    { children }
  </Drawer>
);

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired, 
  children: PropTypes.node.isRequired, 
  isOpen: PropTypes.bool.isRequired, 
  handleToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(NavDrawer);