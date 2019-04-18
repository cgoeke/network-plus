import React, {Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCard } from '../../actions/cardActions';
import { ListItem, Typography } from '@material-ui/core';
import Navbar from './Navbar';
import MenuIcon from './MenuIcon';
import NavDrawer from './NavDrawer';
import NavMenu from './NavMenu';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  componentDidUpdate(prevProps){
    if(prevProps.currentIndex !== this.props.currentIndex){
      this.setState({
        isOpen: false
      });
    }
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render(){
    const { ports, currentIndex, selectCard } = this.props;

    return (
      <Fragment>
        <Navbar>
          <MenuIcon
            isOpen={this.state.isOpen}
            handleToggle={this.handleToggle}
          />
        </Navbar>
        <NavDrawer 
          isOpen={this.state.isOpen}
          handleToggle={this.handleToggle}
        >
          <NavMenu title="Ports">
            { 
              ports.map((item, i) => (
                <ListItem 
                  key={item._id} 
                  onClick={() => selectCard(i)}
                  selected={currentIndex === i}
                  style={{ justifyContent: "center"}}
                  button
                  divider
                >
                  <Typography variant="h6">{ item.port }</Typography>
                </ListItem>
              ))
            }
          </NavMenu>
        </NavDrawer>
      </Fragment>
    );
  }
} 

Navigation.propTypes = {
  ports: PropTypes.array, 
  currentIndex: PropTypes.number.isRequired, 
  selectCard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
  ports: state.data
});

const mapDispatchToProps = dispatch => ({
  selectCard: (i) => dispatch(selectCard(i))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);