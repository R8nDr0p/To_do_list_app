import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
