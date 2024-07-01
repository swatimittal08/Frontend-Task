import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const tasks = [
    {
      name: "Landing Page",
      estimate: "2d 4h",
      spentTime: "1d 2h",
      assignee: "User1",
      priority: "Medium",
      status: "Done",
    },
    {
      name: "UX Sketches",
      estimate: "4d",
      spentTime: "2d 2h 20m",
      assignee: "User2",
      priority: "Low",
      status: "In Progress",
    },
  ];

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      
      <div className="task-filters">
        <button>All</button>
        <button>To Do</button>
        <button>In Progress</button>
        <button>Review</button>
        <button>Done</button>
      </div>

      <div className="tasks">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList; 