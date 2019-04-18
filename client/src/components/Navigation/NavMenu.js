import React from 'react';
import PropTypes from 'prop-types';
import { Divider, ExpansionPanel, ExpansionPanelSummary, List, Typography, withStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const styles = theme => ({
  expanded: {
    marginTop: 0
  },
  list: {
    paddingBottom: theme.spacing.unit * 3,
    width: "100%"
  }
});

const NavMenu = ({ classes, children, title }) => (
  <ExpansionPanel 
    classes={{
      expanded: classes.expanded
    }}
    square
  >
    <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
      <Typography variant="h5">
        { title }
      </Typography>
    </ExpansionPanelSummary>
      <Divider/>
      <List 
        className={classes.list}
        disablePadding
      >
        { children }
      </List>
  </ExpansionPanel>
);

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired, 
  children: PropTypes.node.isRequired, 
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(NavMenu);