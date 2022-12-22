import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  state = {  } 

  render() { 

    return (
      <header className='header'>
        <h1>Task Tracker</h1>
        <Button 
          color='green' 
          text='Add'
          onClick={this.addHandler}
        />
      </header>
    );
  }

  addHandler = () => {
    console.log('addHandler');
  }
}
 
export default Header;