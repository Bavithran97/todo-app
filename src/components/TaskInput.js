import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default TaskInput;