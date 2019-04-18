import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/fetchActions';
import { CssBaseline, withStyles } from '@material-ui/core';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Card from './Card';
import Controls from './Controls';
import Footer from './Footer';
import Error from './Error';

const styles = () => ({
  '@global': {
    'html, body': {
      height: "100%"
    },
    '#root': {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }
  }
});

class App extends Component {
  componentDidMount(){
    this.props.fetchCards();
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline/>
        <Navigation/>
        <MainContent>
          <Card/>
          <Controls/>
          <Error/>
        </MainContent>
        <Footer/>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  fetchCards: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards())
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
