import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class Task extends Component {
  state = {  } 

  render() { 
    return (
      <div className='task'>
        <h3>
          {this.props.task.content} 
          <FaTimes style={ {color: 'red'} } onClick={this.props.onDelete} />
        </h3>
        <p>{this.props.task.day}</p>
      </div>
    );
  }

  

}
 
export default Task;