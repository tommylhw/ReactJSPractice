import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  
  const [tasks, setTasks] = useState([ // *Always keep the state in App.js
    {
      id: 1,
      content: 'content01',
      day: 'day01',
      reminder: true
    },
    {
      id: 2,
      content: 'content02',
      day: 'day02',
      reminder: true
    }
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks 
        tasks={tasks} 
        onDelete={this.deleteTaskHandler}
        />
    </div>
  );

  const deleteTaskHandler = (id) => {
    console.log('deleteTaskHandler: ', id);
  }

}

export default App;
