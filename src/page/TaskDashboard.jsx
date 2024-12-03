import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import FilterBar from '../components/FilterBar';
import TaskList from '../components/TaskList';

const TaskDashboard = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className=''>
      <h1 className='hello'>Task Management Dashboard</h1>
      <TaskForm />
      <FilterBar setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
};

export default TaskDashboard;
