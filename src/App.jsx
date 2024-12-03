import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TaskDetailPage from './features/tasks/TaskDetailPage';
import TaskDashboard from './page/TaskDashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaskDashboard />}  />
      <Route path="/tasks/:id" element={<TaskDetailPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
