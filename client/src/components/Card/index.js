import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DisplayCard from './DisplayCard';
import LoadingCard from './LoadingCard';

const Card = ({ isLoading, currentCard}) => {
  if(isLoading) return <LoadingCard/>
  if(currentCard) return <DisplayCard content={currentCard}/>
  else return null;
};

Card.propTypes = {
  currentCard: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  currentCard: state.data[state.currentIndex]
});

export default connect(
  mapStateToProps
)(Card);
