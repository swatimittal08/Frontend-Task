import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  return (
    <div className={`task-item ${task.status.toLowerCase().replace(" ", "-")}`}>
      <h3>{task.name}</h3>
      <p>Estimate: {task.estimate}</p>
      <p>Spent Time: {task.spentTime}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskItem; 