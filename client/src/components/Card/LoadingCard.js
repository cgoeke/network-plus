import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    alignSelf: "center",
    flexShrink: 1,
    height: "300px",
    margin: theme.spacing.unit,
    width: "500px"
  },
  card: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing.unit * 2,
    position: "relative",
    width: "100%",
  }
});

const LoadingCard = ({ classes }) => (
  <div className={classes.container}>
    <Paper className={classes.card} elevation={20}>
      <Typography variant="h4">Loading...</Typography>
    </Paper>
  </div>
);

LoadingCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadingCard);