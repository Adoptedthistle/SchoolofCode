import React from "react";

function ToDoItem({ todo, toggleComplete }) {
  const { task, priority, complete } = todo;
  return (
    <li onClick={toggleComplete}>
      <h2>{task}</h2>
      <h3>Priority Level: {priority} </h3>
      <p>{complete ? "Done!" : "To do"}</p>
    </li>
  );
}
export default ToDoItem;
