import React, { useState } from "react";
import ToDoItem from "./NewItem";

const toDos = [
  {
    priority: 1,
    task: "make dinner",
    completed: false
  },
  {
    priority: 2,
    task: "clean the kitchen",
    completed: true
  },
  {
    priority: 1,
    task: "wash clothes",
    completed: false
  },
  {
    priority: 2,
    task: "hoover",
    completed: true
  },
  {
    priority: 3,
    task: "take the bins out",
    completed: false
  }
];

function TodoList({ todos = [] }) {
  function toggleComplete(index) {
    console.log("clicked", index);
  }
  return (
    <ul>
      {toDos.map(function(item, i) {
        return (
          <ToDoItem
            //key={task}
            //task={item.task}

            //Could destructure all keys
            todo={item}
            toggleComplete={function() {
              toggleComplete(i);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
