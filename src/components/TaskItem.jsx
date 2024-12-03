import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleComplete, deleteTask } from '../features/tasks/tasksSlice';
import '../App.css'
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className={`status ${task.completed ? 'completed' : 'pending'}`}>
        Status: {task.completed ? 'Completed' : 'Pending'}
      </p>
      <div className="actions">
        <button
          onClick={() => dispatch(toggleComplete(task.id))}
          className="complete-btn"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="delete-btn"
        >
          Delete
        </button>
        {/* Link to Task Detail Page */}
        <Link to={`/tasks/${task.id}`}>
          <button className="view-detail-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
