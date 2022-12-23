import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {

  render() { 

    return (
      <div>
        {this.props.tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={this.props.onDelete} onToggle={this.props.onToggle} />
        ))}
      </div>
    );
  }
}

// using function
/* const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDelete(task.id)} />
      ))}
    </div>
  );
} */
 
export default Tasks;