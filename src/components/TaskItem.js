import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;