import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Grid, Link, withStyles } from '@material-ui/core';
import { GithubCircle } from 'mdi-material-ui';

const styles = theme => ({
  footer: {
    alignItems: "center",
    zIndex: theme.zIndex.modal + 1
  },
  container: {
    alignItems: "center",
    width: "auto"
  }
})

const Footer = ({ classes }) => (
  <AppBar className={classes.footer} component="footer" position="relative">
    <Grid className={classes.container} container>
      <GithubCircle/>
      <Link href="https://github.com/cgoeke/network-plus" color="inherit" variant="subtitle2">
        github
      </Link>
    </Grid>
  </AppBar>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);