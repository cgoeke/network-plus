import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';

const MenuIcon = ({ isOpen, handleToggle }) => (
  <IconButton onClick={handleToggle} color="inherit">
    { isOpen ?
        <Close/>
      :
        <Menu/>
    }
  </IconButton>
);

MenuIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  handleToggle: PropTypes.func.isRequired
};

export default MenuIcon;