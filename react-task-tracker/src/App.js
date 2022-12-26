import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);
 
  const [tasks, setTasks] = useState([]); // *Always keep the state in App.js

  /* Backend */
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks()
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    console.log(data);
    return data;
  }

  const fetchTask = async (selectedId) => {
    const res = await fetch(`http://localhost:5000/tasks/${selectedId}`);
    const data = await res.json();

    return data;
  }
  /* Backend */

  const addTaskHandler = async (task) => {
    /* Backend */
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    /* Backend */


    /* const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {id, ...task};
    setTasks([...tasks, newTask]); */
  };

  const deleteTaskHandler = async (selectedId) => {
    console.log("deleteTaskHandler: ", selectedId);

    /* Backend */
    await fetch(`http://localhost:5000/tasks/${selectedId}`, {
      method: 'DELETE'
    })
    /* Backend */

    setTasks(tasks.filter((task) => task.id !== selectedId));
  };

  const toggleHandler = async (selectedId) => {
    console.log("toggleHandler: ", selectedId);

    /* Backend */
    const taskToToggle = await fetchTask(selectedId);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${selectedId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });

    const data = await res.json();
    /* Backend */

    setTasks(
      tasks.map((task) =>
        task.id === selectedId ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  

    return (
      <div className="container">
        <Header onAddClicked={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTaskHandler} />}
        {tasks.length === 0 ? (
          "No tasks here"
        ) : (
          <Tasks
            tasks={tasks}
            onDelete={deleteTaskHandler}
            onToggle={toggleHandler}
          />
        )}
      </div>
    );

};

export default App;
// test test