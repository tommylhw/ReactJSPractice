import React, { Component } from 'react';

class Button extends Component {
  state = {  } 

  render() { 

    console.log('props: ', this.props);

    return (
      <button className='btn' style={ {backgroundColor: this.props.color} } onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}
 
export default Button;