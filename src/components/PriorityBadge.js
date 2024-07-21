import React from "react";

const PriorityBadge = ({ priority }) => {
  let color;
  switch (priority) {
    case "High":
      color = "bg-red-500";
      break;
    case "Medium":
      color = "bg-yellow-500";
      break;
    default:
      color = "bg-green-500";
  }

  return (
    <span className={`text-white px-2 py-1 rounded ${color}`}>{priority}</span>
  );
};

export default PriorityBadge;
