import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";

/*function App() {
  return <div className="App"></div>;
}*/

function App() {
  const [counter, setCounter] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const[name, setName]=useState()

  function incrementCounter() {
    setCounter(counter + 1);
  }

  //new useeffect gunction for evolutions - if statement
  useEffect(
    function() {
      document.title = "clicked" + counter + "times";
      console.log("using the useEffect hook");
      fetch("http://192.168.0.52:5000/pokemon")
        .then(res => res.json())
        .then(data => setPokemon(data.payload));
    },
    [counter]
  );

  console.log("rerender", pokemon);

  return (
    <div className="container">
      <button onClick={incrementCounter}>{counter}</button>
    </div>

    <div>
      <button onClick={function(pokemon){ 
        pokemon.map(function({name, description}){

      })}>Get Pokemon</button>
    </div>
  );
}


export default App;
