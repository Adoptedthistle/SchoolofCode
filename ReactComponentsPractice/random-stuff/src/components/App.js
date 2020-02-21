import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import FontViewer from "./FontViewer";
import "./App.css";
import RandomWords from "./RandomWords";

import "./App.css";

const words = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday"];

function RandomWords({ word, handleClick }) {
  const [pointer, setPointer] = useState(0);
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * words.length);
    setPointer(randomNumber);
  }
  //setIsOn = !isOn;
  return (
    <div>
      {words[pointer]}
      <button onClick={handleClick}>Generate Word</button>
    </div>
  );
}

function App() {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("Font goes here ...");
  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <div>
      <ToggleButton isOn={isOn} handleClick={handleClick} />
      <FontViewer input={input} handleChange={handleChange} />
      <RandomWords word={words[pointer]} handleClick={handleClick} />
    </div>
  );
}

export default App;
