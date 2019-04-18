import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearError } from '../actions/fetchActions';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  action: {
    justifyContent: "center",
    margin: 0,
    padding: `0px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  button: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  paper: {
    margin: theme.spacing.unit
  },
  root: {
    zIndex: theme.zIndex.modal + 100
  },
  text: {
    color: theme.palette.text.error
  },
  title: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
  }
});

const Error = ({ classes, error, clearError }) => {
  if(!error) return null;
  else return (
    <Dialog 
      open
      classes={{
        paper: classes.paper,
        root: classes.root
      }}
      maxWidth="xs"
    >
      <Typography className={classes.title} color="error" variant="h4">
        {error.name}
      </Typography>
      <DialogContent>
        <DialogContentText color="error">
          { error.message }
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.action}>
        <Button onClick={clearError} className={classes.button} variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  ); 
};

Error.propTypes = {
  classes: PropTypes.object.isRequired, 
  error: PropTypes.object, 
  clearError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError())
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Error)
);
  