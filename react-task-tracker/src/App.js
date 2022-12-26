import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  var [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    // *Always keep the state in App.js
    {
      id: 1,
      content: "content01",
      date: "day01",
      reminder: false,
    },
    {
      id: 2,
      content: "content02",
      date: "day02",
      reminder: false,
    },
    {
      id: 3,
      content: "content03",
      date: "day03",
      reminder: false,
    },
  ]);



  const addTaskHandler = (task) => {
    console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);

    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };

  const deleteTaskHandler = (selectedId) => {
    console.log("deleteTaskHandler: ", selectedId);

    setTasks(tasks.filter((task) => task.id !== selectedId));
  };

  const toggleHandler = (selectedId) => {
    console.log("toggleHandler: ", selectedId);

    setTasks(
      tasks.map((task) =>
        task.id === selectedId ? { ...task, reminder: !task.reminder } : task
      )
    );
  };


    return (
      <div className="container">
        <Header addClicked={() => setShowAddTask = (!setShowAddTask)}/>
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
