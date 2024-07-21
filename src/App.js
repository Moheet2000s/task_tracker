import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = filter
    ? tasks.filter((task) => task.category === filter)
    : tasks;

  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <div className="container mx-auto p-4">
      <Header />
      <TaskForm onAdd={addTask} />
      <Filter
        categories={categories}
        selectedCategory={filter}
        onSelectCategory={setFilter}
      />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
