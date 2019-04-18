import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPrevCard, getNextCard } from '../../actions/cardActions';
import Controller from './Controller';

const Controls = ({ current, total, getPrevCard, getNextCard }) => {
  if(!total) return null;
  else return (
    <Controller 
      current={current}
      total={total}
      handlePrev={getPrevCard}
      handleNext={getNextCard}
    />
  );  
};

Controls.propTypes = {
  current: PropTypes.number.isRequired, 
  total: PropTypes.number, 
  getPrevCard: PropTypes.func.isRequired, 
  getNextCard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.currentIndex + 1,
  total: state.data.length
});

const mapDispatchToProps = dispatch => ({
  getPrevCard: () => dispatch(getPrevCard()),
  getNextCard: () => dispatch(getNextCard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);