import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === Number(id))
  );

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <div className='task-detail-container'>
      <h2 className='task-detail-title'>{task.title}</h2>
      <div className='task-info'>
      <p>{task.description}</p>
      <p >Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={() => navigate('/')} className='Back'>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default TaskDetailPage;


