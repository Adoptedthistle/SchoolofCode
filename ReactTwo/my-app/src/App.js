import React, { useState } from "react";
import "./App.css";
import TodoList from "./toDoList";

export default App;

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

/*
function App(){
 const[todo, setTodos] =useState(initial_data);

function handleClick(index){
  console.log(`you clicked item ${index}`);
  const newTodos =[ ...todos.slice(0, index), todos.slice(index+1)];
  set todos(newTodos);
}
}*/
