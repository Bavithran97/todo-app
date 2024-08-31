import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // State to hold all tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the current filter
  const [filter, setFilter] = useState('All');

  // Function to add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Function to toggle the completion status of a task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to get filtered tasks based on the current filter
  const getFilteredTasks = () => {
    if (filter === 'Completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'Incomplete') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="container my-5">
      <Header />
      <TaskInput addTask={addTask} />
      <FilterBar currentFilter={filter} setFilter={setFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
};

export default App;