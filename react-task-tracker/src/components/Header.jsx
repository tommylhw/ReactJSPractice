import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

/* class Header extends Component {
  render() { 

    return (
      <header className='header'>
        <h1>Task Tracker</h1>
        <Button 
          color={this.props.showAdd ? 'red' : 'green'}
          text={this.props.showAdd ? 'Close' : 'Add'}
          onClick={this.props.onAddClicked}
        />
      </header>
    );
  }
} */

const Header = ({ showAdd, onAddClicked }) => {

  const location = useLocation();

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      {location.pathname === '/' && (
        <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAddClicked}
        />
      )}
    </header>
  )
}

export default Header;