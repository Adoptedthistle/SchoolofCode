import React from "react";

//Create a button that generates a random word on click
//Button must generate a different word everytime it's pressed

//const words = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday"];

function RandomWords() {
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

export default RandomWords;
