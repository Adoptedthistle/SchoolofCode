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

//When item is clicked, changed the status of the list item.  Delete?

function onClick() {
  const [todo, setTodos] = useState(toDos);
}

/*
function toggle(){
 const[todo, setTodos] =useState(toDos);

function handleClick(index){
  console.log(`you clicked item ${index}`);
  const newTodos =[ ...todos.slice(0, index), todos.slice(index+1)];
  set todos(newTodos);
}
}
*/
