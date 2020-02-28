import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import ".src/PigeonItem";
import PigeonItem from "./PigeonItem";

/*
//Pigeon Stuff
const dummyData = [
  {
    name: "Gerald",
    id: 5555,
    longitude: "-1.933594",
    latitude: "51.563412",
    img_url:
      "https://www.audubon.org/sites/default/files/apa_2016-a1_2055_4_rock-pigeon_laura_perrotta_kk.jpg"
  },
  {
    name: "Florence",
    id: 5555,
    longitude: "-1.933563",
    latitude: "51.563456",
    img_url:
      "https://images.theconversation.com/files/263871/original/file-20190314-28475-5pk40x.jpg?ixlib=rb-1.1.0&rect=0%2C6%2C4513%2C3546&q=45&auto=format&w=926&fit=clip"
  }
];

function App() {
  return (
    <div className="App">
      <PigeonItem
        id={dummyData[0].id}
        name={dummyData[0].name}
        longitude={dummyData[0].longitude}
        latitude={dummyData[0].latitude}
        img_url={dummyData[0].img_url}
      />
    </div>
  );
}

export default App;
*/

//Create a custom hook which tracks number and gives us a function that increments it
//Use state to track number and give us functions to set the number
//Create upOne function using setState, handing in number+1
//Return array [state, setState]
//Clear up after using interval

function useCounter(0) {
  const [num, setNum] = useState(0);

  function upOne() {
   
    setCounter(num + 1);
  }
  useEffect (()=>
  setInterval(() =>{
    upOne();
  }, time);
  return()=>
  })
  )

  return [num, upOne];
}

function App() {
  const [count, incrementCount] = useCounter(0);

  return (
    <div className="App">
      <button onClick={incrementCount}>you've clicked {counter}times!</button>
    </div>
  );
}
[clicks, incrementClicks];
