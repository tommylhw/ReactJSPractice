import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {

  render() { 

    return (
      <div>
        {this.props.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }
}
 
export default Tasks;