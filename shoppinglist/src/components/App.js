import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import ClearButton from "./ClearButton";
import List from "./List";
//import { waitForDomChange } from "@testing-library/react";

//Add a test list for the shopping items
//Need a function to clearAll (ClearButton) items on the shopping list
//Need a function connected to input.js to add items to the list

function App() {
  const [list, setList] = React.useState(["apple", "drink"]);

  function clearAll() {
    return setList([]);
  }

  function addList() {
    return list();
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <Input Input={Input} />
      <List List={List} />
      <ClearButton ClearButton={ClearButton} />
    </div>
  );
}
export default App;

//User Stories
//As a user I want to be able to add items to my shopping list so that I don't have to remember.
//As a user I want to be able see all my items on my shopping so that I know what to buy
//As a user I want to be able to clear the list so that I can start again for my next shop
//As a user I want a notification if I try to add the same item twice so that I don't buy too much of one thing.

//Add function addToList here (feeds down to input)
//Add list function here
