import React, { Component } from 'react';

class Task extends Component {
  state = {  } 
  render() { 
    return (
      <div className='task'>
        <h3>{this.props.task.content}</h3>
        <p>{this.props.task.day}</p>
      </div>
    );
  }
}
 
export default Task;