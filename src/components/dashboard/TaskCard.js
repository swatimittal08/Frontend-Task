import React from 'react';

const TaskCard = ({ taskName, estimate, spentTime, assignee, priority, status }) => {
  return (
    <div className="task-card">
      <div className="task-name">{taskName}</div>
      <div className="task-info">
        <div>Estimate: {estimate}</div>
        <div>Spent Time: {spentTime}</div>
        <div>Assignee: {assignee}</div>
        <div>Priority: {priority}</div>
        <div>Status: {status}</div>
      </div>
    </div>
  );
};

export default TaskCard; 