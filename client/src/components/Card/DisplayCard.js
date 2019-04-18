import React, { Component } from 'react';
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
    cursor: "pointer",
    height: "100%",
    position: "relative",
    transformStyle: 'preserve-3d',
    transition: `all 0.5s ${theme.transitions.easing.easeInOut}`,
    width: "100%"
  },
  display: {
    alignItems: "center",
    backfaceVisibility: 'hidden',
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing.unit * 2,
    position: "absolute",
    transform: 'rotateX(0deg)',
    width: "100%"
  },
  isFlipped: {
    transform: 'rotateX(0deg) rotateY(180deg)'
  }
});

class DisplayCard extends Component {
  state = {
    isFlipped: false
  };

  handleFlip = () => {
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  componentDidUpdate(prevProps){
    const prevCard = prevProps.content;
    const currentCard = this.props.content;

    // Set card to front if card has changed
    if(prevCard && prevCard._id !== currentCard._id){
      this.setState({
        isFlipped: false
      });
    }
  }

  render(){
    const { isFlipped } = this.state;
    const { classes, content } = this.props;

    return (
      <div className={classes.container}>
        <div 
          onClick={this.handleFlip}
          className={`${classes.card} ${isFlipped ? classes.isFlipped : null}`}
        >
          <Paper 
            className={classes.display} 
            elevation={20}
          >
            <Typography variant="h4">port: {content.port}</Typography>
          </Paper>
          <Paper className={`${classes.display} ${classes.isFlipped}`} elevation={20}>
            <Typography gutterBottom variant="h5">{content.protocol}</Typography>
            <Typography variant="body1">{content.description}</Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
};

export default withStyles(styles)(DisplayCard);