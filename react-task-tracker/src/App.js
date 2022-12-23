import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  
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
    },
    {
      id: 3,
      content: 'content03',
      day: 'day03',
      reminder: true
    }
  ]);

  const deleteTaskHandler = (selectedId) => {
    console.log('deleteTaskHandler: ', selectedId);

    setTasks(tasks.filter((task) => task.id !== selectedId));
  }

  const toggleHandler = (selectedId) => {
    console.log('toggleHandler: ', selectedId);

    setTasks(tasks.map((task) => task.id === selectedId ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="container">
      <Header />
      { tasks.length === 0 ? 'No tasks here' : <Tasks tasks={tasks} onDelete={deleteTaskHandler} onToggle={toggleHandler} /> }
    </div>
  );

}

export default App;
