import React from "react";
import PriorityBadge from "./PriorityBadge";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-4"
        />
        <div>
          <h3 className={`${task.completed ? "line-through" : ""} text-lg`}>
            {task.title}
          </h3>
          <PriorityBadge priority={task.priority} />
          <p className="text-gray-600">{task.category}</p>
          <p className="text-gray-600">{task.dueDate}</p>
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
