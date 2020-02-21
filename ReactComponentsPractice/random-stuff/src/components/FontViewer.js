import React, { useState } from "react";

function FontViewer({ input, handleChange }) {
  const [input, setInput] = useState("");
  function handleChange(event) {
    //setInput(event.target.value);
    const value = event.target.value;
    if (value.length > 10) {
      setInput(value.slice(-10));
      return;
    }
    setInput(value);
  }
  return (
    <div>
      <input value={input} onChange={handleChange} />
      <ol>
        <li>{input}</li>
        <li>{input}</li>
        <li>{input}</li>
        <li>{input}</li>
      </ol>
    </div>
  );
}

export default FontViewer;
