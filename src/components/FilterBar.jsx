import React from 'react';

const FilterBar = ({ setFilter }) => {
  return (
    <div className='actions'>
      <button onClick={() => setFilter('all')} className='complete-btn'>All Tasks</button>
      <button onClick={() => setFilter('completed')} className='delete-btn'>Completed</button>
      <button onClick={() => setFilter('pending')} className='status'>Pending</button>
    </div>
  );
};

export default FilterBar;
