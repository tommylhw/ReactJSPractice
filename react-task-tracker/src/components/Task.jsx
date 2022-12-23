import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class Task extends Component {
  state = {  } 

  render() { 
    return (
      // ! using conditional className
      <div className={`task ${this.props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => this.props.onToggle(this.props.task.id)} > 
        <h3>
          {this.props.task.content}
          <FaTimes 
            style={ {color: 'red'} } 
            onClick={() => this.props.onDelete(this.props.task.id)} // !Here must use a function in onClick since we need to attach the id
          />
          
        </h3>
        <p>{this.props.task.day}</p>
      </div>
    );
  }

  

}

// using function
/* const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.content}
        <FaTimes style={ {color: 'red'} } onClick={onDelete} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
} */
 
export default Task;